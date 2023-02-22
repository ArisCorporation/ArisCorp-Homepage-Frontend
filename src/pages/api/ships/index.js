import axios from 'axios'

const SMURL = 'https://robertsspaceindustries.com/ship-matrix/index'
const FLURL = 'https://api.fleetyards.net/v1/models/'
const SCWURL = 'https://api.star-citizen.wiki/api/'
const BackendURL = 'https://cms.ariscorp.de'
const P4kURL =
  'https://raw.githubusercontent.com/ArisCorporation/p4k/main/latest/json/'
import { Directus } from '@directus/sdk'

const directus = new Directus(BackendURL)

const toTitleCase = (phrase) => {
  return phrase
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

function string_to_slug(str) {
  str = str.replace(/^\s+|\s+$/g, '') // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  var from = 'àáäâèéëêìíïîòóöôùúüûñç·/_,:;'
  var to = 'aaaaeeeeiiiioooouuuunc------'
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes

  return str
}

async function getDirectusFiles() {
  let res = await axios.get(
    BackendURL +
      '/files?limit=-1&filter[folder]=7150758a-09d0-465e-aaf8-fb1f2a417715'
  )
  let data = res.data.data

  return data
}

async function getFileIds(object, Files) {
  const fileIds = {
    brochure: null,
    holo: null,
  }

  if (object.brochure != null) {
    var brochure = await Files.find(
      (element) => element.title == 'brochure-' + object.slug
    )

    if (brochure != null) {
      fileIds.brochure = brochure.id
    } else {
      brochure = await uploadFile(object.brochure, object.slug, 'brochure')
      fileIds.brochure = brochure.id
    }
  }

  if (object.holo != null) {
    var holo = await Files.find(
      (element) => element.title == 'holo-' + object.slug
    )

    if (holo != null) {
      fileIds.holo = holo.id
    } else {
      holo = await uploadFile(object.holo, object.slug, 'holo')
      fileIds.holo = holo.id
    }
  }

  return fileIds
}

async function uploadFile(url, title, fileType) {
  var folder

  if (fileType == 'brochure') {
    folder = 'a4100209-e7a7-46a1-a6c3-0272303a1a0a'
  } else if (fileType == 'holo') {
    folder = '7dd5f1c3-9a08-4477-811a-2a932b9e1c98'
  } else if (fileType == 'shipImage') {
    folder = '95c311dc-4ffb-4e48-b41a-bb959399eddc'
  } else if (fileType == 'paint') {
    folder = '7150758a-09d0-465e-aaf8-fb1f2a417715'
  }

  const fullTitle = fileType + '-' + title

  let payload = {
    url: url,
    data: {
      title: fullTitle,
      folder: folder,
    },
  }

  // let res = await axios.post(
  //   BackendURL + '/files/import?access_token=te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg',
  //   payload
  // )

  // let data = await res.data.data

  await directus.auth.static('te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg')
  const data = await directus.files.import({
    url: payload.url,
    data: payload.data,
  })

  return data
}

async function getSMData() {
  const actualUrl = SMURL
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults.data
}

async function getFlShip(ship) {
  const actualUrl = FLURL + ship
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults
}

async function getFlPaints(ship) {
  const actualUrl = FLURL + ship + '/paints'
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults
}

async function getFlModules(ship) {
  const actualUrl = FLURL + ship + '/modules'
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults
}

async function getScwShip(ship) {
  const actualUrl = SCWURL + 'vehicles/' + ship
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults.data
}

async function getP4kShipsData() {
  const actualUrl = P4kURL + 'v2/ships.json'
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults
}

async function getP4kShipHardpoints(ship) {
  const actualUrl = P4kURL + 'v2/ships/' + ship + '-ports.json'
  var apiResults = await fetch(actualUrl)
    .then((resp) => {
      return resp.json()
    })
    .catch((error) => {
      return
    })

  return apiResults
}

async function getLiveShipData() {
  const actualUrl = BackendURL + '/items/ships?fields=id,name,slug'
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults.data
}

async function getManufacturers() {
  const actualUrl =
    BackendURL +
    '/items/firmen?filter[firmenherstellerkategorie]=schiffshersteller&fields=id,firmen_name,slug,code&limit=-1'
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults.data
}

async function getComponents() {
  const actualUrl =
    BackendURL + '/items/components?fields=id,name,slug&limit=-1'
  var apiResults = await fetch(actualUrl).then((resp) => {
    return resp.json()
  })

  return apiResults.data
}

async function formData() {
  const rawShipMatrixData = await getSMData()
  const rawP4kShips = await getP4kShipsData()
  const liveShipData = await getLiveShipData()
  const manufacturers = await getManufacturers()
  const components = await getComponents()
  const ships = []

  const skippedShips = [
    'Anvil Ballista Dunestalker',
    'Anvil Ballista Snowblind',
    'Argo Mole Talus Edition',
    'Argo Mole Carbon Edition',
    'Carrack Expedition w/C8X',
    'Carrack w/C8X',
    'Caterpillar Best In Show Edition',
    'Caterpillar Pirate Edition',
    'Constellation Phoenix Emerald',
    'Cutlass Black Best In Show Edition',
    'Hammerhead Best In Show Edition',
    'Constellation Phoenix Emerald',
    'P-72 Archimedes Emerald',
    'Reclaimer Best In Show Edition',
    'Mustang Alpha Vindicator',
    'Nautilus Solstice Edition',
    'Valkyrie Liberator Edition',
  ]
  const skippedPaints = ['Carrack Expedition']
  const slugOverwrites = [
    {
      ship: 'santokyi',
      slug: 'san-tok-yai',
    },
  ]
  const flSlugOverwrites = [
    {
      ship: 'carrack-expedition',
      slug: 'carrack',
    },
    {
      ship: '600i-executive-edition',
      slug: '600i',
    },
  ]

  if (
    !rawShipMatrixData.find((e) => e.name === 'Dragonfly Starkitten Edition')
  ) {
    const orgShip = rawShipMatrixData.find(
      (e) => e.name === 'Dragonfly Yellowjacket'
    )
    rawShipMatrixData.push({
      ...orgShip,
      name: 'Dragonfly Starkitten Edition',
    })
  }

  if (!rawShipMatrixData.find((e) => e.name === '600i Executive Edition')) {
    const orgShip = rawShipMatrixData.find((e) => e.name === '600i Explorer')
    rawShipMatrixData.push({
      ...orgShip,
      name: '600i Executive Edition',
    })
  }

  if (!rawShipMatrixData.find((e) => e.name === 'PTV')) {
    rawShipMatrixData.push({
      name: 'PTV',
      url: '/pledge/ships/greycat-ptv/ptv',
      manufacturer: {
        id: '17',
        code: 'GRIN',
        description: null,
        known_for: 'ROC and ROC-DS',
        name: 'Greycat Industrial',
        media: [
          {
            id: '1206133',
            cover_data: null,
            depot: 'LOCAL_MEDIA',
            depot_status: 'R',
            derived_data: {
              sizes: {
                heap_note: {
                  width: 24,
                  height: 24,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                heap_thumb: {
                  width: 61,
                  height: 61,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                heap_infobox: {
                  width: 165,
                  height: 165,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                bug_council_thumbnail: {
                  width: 224,
                  height: 140,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                tavern_upload_mini: {
                  width: 150,
                  height: 100,
                  mode: 'resize-crop',
                },
                tavern_upload_square: {
                  width: 250,
                  height: 250,
                  mode: 'resize',
                },
                tavern_upload_small: {
                  width: 400,
                  height: 224,
                  mode: 'resize',
                },
                tavern_upload_medium: {
                  width: 400,
                  height: 400,
                  mode: 'resize',
                },
                tavern_upload_large: {
                  width: 1680,
                  height: 1050,
                  mode: 'resize',
                },
                post_section_header: {
                  width: 1118,
                  height: 351,
                  mode: 'resize-crop',
                },
                channel_item_full: {
                  width: 1119,
                  height: 600,
                  mode: 'resize-crop',
                },
                home_transmissions_item_expanded: {
                  width: 530,
                  height: 280,
                  mode: 'resize-crop',
                },
                subscribers_vault_thumbnail: {
                  width: 216,
                  height: 133,
                  mode: 'resize-crop',
                },
                slideshow: {
                  width: 648,
                  height: 366,
                  mode: 'resize-crop',
                },
                slideshow_pager: {
                  width: 88,
                  height: 50,
                  mode: 'resize-crop',
                },
                slideshow_wide: {
                  width: 1200,
                  height: 800,
                  mode: 'resize',
                },
                vault_thumb: {
                  width: 335,
                  height: null,
                  mode: 'resize',
                },
                post: {
                  width: 500,
                  height: null,
                  mode: 'resize',
                },
                wallpaper_thumb: {
                  width: 620,
                  height: 400,
                  mode: 'resize-crop',
                },
                product_thumb_large: {
                  width: 341,
                  height: 204,
                  mode: 'resize-crop',
                },
                product_thumb_medium_and_small: {
                  width: 180,
                  height: 150,
                  mode: 'resize-crop',
                },
                component_description: {
                  width: 415,
                  height: null,
                  mode: 'resize',
                },
                product_thumb_in_description: {
                  width: 350,
                  height: 350,
                  mode: 'resize-crop',
                },
                product_thumb_shipmod: {
                  width: 248,
                  height: 188,
                  mode: 'resize-crop',
                },
                press_latest_post: {
                  width: 509,
                  height: 211,
                  mode: 'resize-crop',
                },
                store_small: {
                  width: 351,
                  height: 210,
                  mode: 'resize-crop',
                },
                store_large: {
                  width: 818,
                  height: 288,
                  mode: 'resize-crop',
                },
                store_hub_small: {
                  width: 600,
                  height: 210,
                  mode: 'resize-crop',
                },
                store_hub_large: {
                  width: 1200,
                  height: 420,
                  mode: 'resize-crop',
                },
                store_slideshow_small: {
                  width: 800,
                  height: 300,
                  mode: 'resize-crop',
                },
                store_slideshow_large: {
                  width: 1140,
                  height: 390,
                  mode: 'resize-crop',
                },
                store_slideshow_small_zoom: {
                  width: 710,
                  height: 516,
                  mode: 'resize-crop',
                },
                store_slideshow_large_zoom: {
                  width: 1420,
                  height: 1032,
                  mode: 'resize-crop',
                },
                store_thumb_listing_small: {
                  width: 186,
                  height: 63,
                  mode: 'resize-crop',
                },
                store_thumb_sku_detail: {
                  width: 318,
                  height: 248,
                  mode: 'resize-crop',
                },
                store_upgrade_half: {
                  width: 400,
                  height: 300,
                  mode: 'resize-crop',
                },
                avatar: {
                  width: 76,
                  height: 76,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                banner: {
                  width: 1140,
                  height: 380,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                cover: {
                  width: 1140,
                  height: '',
                  mode: 'resize',
                  delete: '1--1',
                },
                logo: {
                  width: 175,
                  height: 175,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                icon: {
                  width: 45,
                  height: 45,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                background_blur: {
                  width: 1366,
                  height: 768,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                texture: {
                  width: 512,
                  height: 512,
                  mode: 'resize-crop',
                },
                hub_large: {
                  width: 1020,
                  height: '\\>',
                  mode: 'resize',
                },
                hub_medium: {
                  width: 360,
                  height: 210,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                hub_small: {
                  width: 150,
                  height: 90,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                hub_tile: {
                  width: 360,
                  height: 355,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
              },
            },
            distant_id: null,
            distant_source: null,
            publish_end: null,
            publish_start: null,
            purpose: 'full',
            slug: '5jf6y40pc7ngx',
            source_duration: null,
            source_extension: 'png',
            source_name: 'GreyCat-Icon',
            status: 'P',
            tag_string: '',
            time_modified: '2017-11-27 23:15:09',
            type: 'I',
            source_url: '/media/5jf6y40pc7ngxr/source/GreyCat-Icon.png',
            source_stream: {
              progressive: '/media/5jf6y40pc7ngxr/source/GreyCat-Icon.png',
            },
            images: {
              heap_note: '/media/5jf6y40pc7ngxr/heap_note/GreyCat-Icon.png',
              heap_thumb: '/media/5jf6y40pc7ngxr/heap_thumb/GreyCat-Icon.png',
              heap_infobox:
                '/media/5jf6y40pc7ngxr/heap_infobox/GreyCat-Icon.png',
              tavern_upload_emoji:
                '/media/5jf6y40pc7ngxr/tavern_upload_emoji/GreyCat-Icon.png',
              tavern_upload_mini:
                '/media/5jf6y40pc7ngxr/tavern_upload_mini/GreyCat-Icon.png',
              tavern_upload_square:
                '/media/5jf6y40pc7ngxr/tavern_upload_square/GreyCat-Icon.png',
              tavern_upload_small:
                '/media/5jf6y40pc7ngxr/tavern_upload_small/GreyCat-Icon.png',
              tavern_upload_medium:
                '/media/5jf6y40pc7ngxr/tavern_upload_medium/GreyCat-Icon.png',
              tavern_upload_large:
                '/media/5jf6y40pc7ngxr/tavern_upload_large/GreyCat-Icon.png',
              post_section_header:
                '/media/5jf6y40pc7ngxr/post_section_header/GreyCat-Icon.png',
              channel_item_full:
                '/media/5jf6y40pc7ngxr/channel_item_full/GreyCat-Icon.png',
              home_transmissions_item_expanded:
                '/media/5jf6y40pc7ngxr/home_transmissions_item_expanded/GreyCat-Icon.png',
              subscribers_vault_thumbnail:
                '/media/5jf6y40pc7ngxr/subscribers_vault_thumbnail/GreyCat-Icon.png',
              slideshow: '/media/5jf6y40pc7ngxr/slideshow/GreyCat-Icon.png',
              slideshow_pager:
                '/media/5jf6y40pc7ngxr/slideshow_pager/GreyCat-Icon.png',
              slideshow_wide:
                '/media/5jf6y40pc7ngxr/slideshow_wide/GreyCat-Icon.png',
              vault_thumb: '/media/5jf6y40pc7ngxr/vault_thumb/GreyCat-Icon.png',
              post: '/media/5jf6y40pc7ngxr/post/GreyCat-Icon.png',
              wallpaper_thumb:
                '/media/5jf6y40pc7ngxr/wallpaper_thumb/GreyCat-Icon.png',
              product_thumb_large:
                '/media/5jf6y40pc7ngxr/product_thumb_large/GreyCat-Icon.png',
              product_thumb_medium_and_small:
                '/media/5jf6y40pc7ngxr/product_thumb_medium_and_small/GreyCat-Icon.png',
              component_description:
                '/media/5jf6y40pc7ngxr/component_description/GreyCat-Icon.png',
              product_thumb_in_description:
                '/media/5jf6y40pc7ngxr/product_thumb_in_description/GreyCat-Icon.png',
              product_thumb_shipmod:
                '/media/5jf6y40pc7ngxr/product_thumb_shipmod/GreyCat-Icon.png',
              press_latest_post:
                '/media/5jf6y40pc7ngxr/press_latest_post/GreyCat-Icon.png',
              store_small: '/media/5jf6y40pc7ngxr/store_small/GreyCat-Icon.png',
              store_large: '/media/5jf6y40pc7ngxr/store_large/GreyCat-Icon.png',
              store_hub_small:
                '/media/5jf6y40pc7ngxr/store_hub_small/GreyCat-Icon.png',
              store_hub_large:
                '/media/5jf6y40pc7ngxr/store_hub_large/GreyCat-Icon.png',
              store_slideshow_small:
                '/media/5jf6y40pc7ngxr/store_slideshow_small/GreyCat-Icon.png',
              store_slideshow_large:
                '/media/5jf6y40pc7ngxr/store_slideshow_large/GreyCat-Icon.png',
              store_slideshow_small_zoom:
                '/media/5jf6y40pc7ngxr/store_slideshow_small_zoom/GreyCat-Icon.png',
              store_slideshow_large_zoom:
                '/media/5jf6y40pc7ngxr/store_slideshow_large_zoom/GreyCat-Icon.png',
              store_thumb_listing_small:
                '/media/5jf6y40pc7ngxr/store_thumb_listing_small/GreyCat-Icon.png',
              store_thumb_sku_detail:
                '/media/5jf6y40pc7ngxr/store_thumb_sku_detail/GreyCat-Icon.png',
              store_upgrade_half:
                '/media/5jf6y40pc7ngxr/store_upgrade_half/GreyCat-Icon.png',
              sku_widget_thumbnail:
                '/media/5jf6y40pc7ngxr/sku_widget_thumbnail/GreyCat-Icon.png',
              sku_widget_modal:
                '/media/5jf6y40pc7ngxr/sku_widget_modal/GreyCat-Icon.png',
              avatar: '/media/5jf6y40pc7ngxr/avatar/GreyCat-Icon.png',
              banner: '/media/5jf6y40pc7ngxr/banner/GreyCat-Icon.png',
              cover: '/media/5jf6y40pc7ngxr/cover/GreyCat-Icon.png',
              logo: '/media/5jf6y40pc7ngxr/logo/GreyCat-Icon.png',
              icon: '/media/5jf6y40pc7ngxr/icon/GreyCat-Icon.png',
              background_blur:
                '/media/5jf6y40pc7ngxr/background_blur/GreyCat-Icon.png',
              texture: '/media/5jf6y40pc7ngxr/texture/GreyCat-Icon.png',
              hub_large: '/media/5jf6y40pc7ngxr/hub_large/GreyCat-Icon.png',
              hub_medium: '/media/5jf6y40pc7ngxr/hub_medium/GreyCat-Icon.png',
              hub_small: '/media/5jf6y40pc7ngxr/hub_small/GreyCat-Icon.png',
              hub_tile: '/media/5jf6y40pc7ngxr/hub_tile/GreyCat-Icon.png',
              wallpaper_3840x2160:
                '/media/5jf6y40pc7ngxr/wallpaper_3840x2160/GreyCat-Icon.png',
              wallpaper_1920x1080:
                '/media/5jf6y40pc7ngxr/wallpaper_1920x1080/GreyCat-Icon.png',
              wallpaper_512x384:
                '/media/5jf6y40pc7ngxr/wallpaper_512x384/GreyCat-Icon.png',
              wsc_event_thumb:
                '/media/5jf6y40pc7ngxr/wsc_event_thumb/GreyCat-Icon.png',
              manufacturer_logo_xs:
                '/media/5jf6y40pc7ngxr/manufacturer_logo_xs/GreyCat-Icon.png',
            },
            'membership.id': '453816',
            'membership.slot': 'icon',
          },
        ],
      },
    })
  }

  if (!rawShipMatrixData.find((e) => e.name === 'F8A Lightning')) {
    rawShipMatrixData.push({
      name: 'F8A Lightning',
      url: '/pledge/ships/anvil-f8/F8A-Lightning',
      type: 'Combat',
      focus: 'Heavy Fighter',
      manufacturer: {
        id: '3',
        code: 'ANVL',
        description:
          'Produces dogfighters, but with less of the pirate stigma. These ships are more expensive, less spit-and-glue',
        known_for: 'the Hornet Fighters',
        name: 'Anvil Aerospace',
        media: [
          {
            id: '312955',
            cover_data: null,
            depot: 'LOCAL_MEDIA',
            depot_status: 'R',
            derived_data: {
              sizes: {
                heap_note: {
                  width: 24,
                  height: 24,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                heap_thumb: {
                  width: 61,
                  height: 61,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                heap_infobox: {
                  width: 165,
                  height: 165,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                post_section_header: {
                  width: 1118,
                  height: 351,
                  mode: 'resize-crop',
                },
                channel_item_full: {
                  width: 1119,
                  height: 600,
                  mode: 'resize-crop',
                },
                home_transmissions_item_expanded: {
                  width: 530,
                  height: 280,
                  mode: 'resize-crop',
                },
                subscribers_vault_thumbnail: {
                  width: 216,
                  height: 133,
                  mode: 'resize-crop',
                },
                slideshow: {
                  width: 648,
                  height: 366,
                  mode: 'resize-crop',
                },
                slideshow_pager: {
                  width: 88,
                  height: 50,
                  mode: 'resize-crop',
                },
                vault_thumb: {
                  width: 335,
                  height: null,
                  mode: 'resize',
                },
                post: {
                  width: 500,
                  height: null,
                  mode: 'resize',
                },
                wallpaper_thumb: {
                  width: 620,
                  height: 400,
                  mode: 'resize-crop',
                },
                product_thumb_large: {
                  width: 341,
                  height: 204,
                  mode: 'resize-crop',
                },
                product_thumb_medium_and_small: {
                  width: 180,
                  height: 150,
                  mode: 'resize-crop',
                },
                component_description: {
                  width: 415,
                  height: null,
                  mode: 'resize',
                },
                product_thumb_in_description: {
                  width: 350,
                  height: 350,
                  mode: 'resize-crop',
                },
                product_thumb_shipmod: {
                  width: 248,
                  height: 188,
                  mode: 'resize-crop',
                },
                press_latest_post: {
                  width: 509,
                  height: 211,
                  mode: 'resize-crop',
                },
                store_small: {
                  width: 351,
                  height: 210,
                  mode: 'resize-crop',
                },
                store_large: {
                  width: 818,
                  height: 288,
                  mode: 'resize-crop',
                },
                store_hub_small: {
                  width: 600,
                  height: 210,
                  mode: 'resize-crop',
                },
                store_hub_large: {
                  width: 1200,
                  height: 420,
                  mode: 'resize-crop',
                },
                store_slideshow_small: {
                  width: 800,
                  height: 300,
                  mode: 'resize-crop',
                },
                store_slideshow_large: {
                  width: 1140,
                  height: 390,
                  mode: 'resize-crop',
                },
                store_slideshow_small_zoom: {
                  width: 710,
                  height: 516,
                  mode: 'resize-crop',
                },
                store_slideshow_large_zoom: {
                  width: 1420,
                  height: 1032,
                  mode: 'resize-crop',
                },
                store_thumb_listing_small: {
                  width: 186,
                  height: 63,
                  mode: 'resize-crop',
                },
                store_thumb_sku_detail: {
                  width: 318,
                  height: 248,
                  mode: 'resize-crop',
                },
                avatar: {
                  width: 76,
                  height: 76,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                banner: {
                  width: 1140,
                  height: 380,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                cover: {
                  width: 1140,
                  height: '',
                  mode: 'resize',
                  delete: '1--1',
                },
                logo: {
                  width: 175,
                  height: 175,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                icon: {
                  width: 45,
                  height: 45,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                background_blur: {
                  width: 1366,
                  height: 768,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
              },
            },
            distant_id: null,
            distant_source: null,
            publish_end: null,
            publish_start: null,
            purpose: 'full',
            slug: 'w0o33qmdai9wp',
            source_duration: null,
            source_extension: 'png',
            source_name: 'Anvil',
            status: 'P',
            tag_string: '',
            time_modified: '2014-08-04 13:09:26',
            type: 'I',
            source_url: '/media/w0o33qmdai9wpr/source/Anvil.png',
            source_stream: {
              progressive: '/media/w0o33qmdai9wpr/source/Anvil.png',
            },
            images: {
              heap_note: '/media/w0o33qmdai9wpr/heap_note/Anvil.png',
              heap_thumb: '/media/w0o33qmdai9wpr/heap_thumb/Anvil.png',
              heap_infobox: '/media/w0o33qmdai9wpr/heap_infobox/Anvil.png',
              tavern_upload_emoji:
                '/media/w0o33qmdai9wpr/tavern_upload_emoji/Anvil.png',
              tavern_upload_mini:
                '/media/w0o33qmdai9wpr/tavern_upload_mini/Anvil.png',
              tavern_upload_square:
                '/media/w0o33qmdai9wpr/tavern_upload_square/Anvil.png',
              tavern_upload_small:
                '/media/w0o33qmdai9wpr/tavern_upload_small/Anvil.png',
              tavern_upload_medium:
                '/media/w0o33qmdai9wpr/tavern_upload_medium/Anvil.png',
              tavern_upload_large:
                '/media/w0o33qmdai9wpr/tavern_upload_large/Anvil.png',
              post_section_header:
                '/media/w0o33qmdai9wpr/post_section_header/Anvil.png',
              channel_item_full:
                '/media/w0o33qmdai9wpr/channel_item_full/Anvil.png',
              home_transmissions_item_expanded:
                '/media/w0o33qmdai9wpr/home_transmissions_item_expanded/Anvil.png',
              subscribers_vault_thumbnail:
                '/media/w0o33qmdai9wpr/subscribers_vault_thumbnail/Anvil.png',
              slideshow: '/media/w0o33qmdai9wpr/slideshow/Anvil.png',
              slideshow_pager:
                '/media/w0o33qmdai9wpr/slideshow_pager/Anvil.png',
              slideshow_wide: '/media/w0o33qmdai9wpr/slideshow_wide/Anvil.png',
              vault_thumb: '/media/w0o33qmdai9wpr/vault_thumb/Anvil.png',
              post: '/media/w0o33qmdai9wpr/post/Anvil.png',
              wallpaper_thumb:
                '/media/w0o33qmdai9wpr/wallpaper_thumb/Anvil.png',
              product_thumb_large:
                '/media/w0o33qmdai9wpr/product_thumb_large/Anvil.png',
              product_thumb_medium_and_small:
                '/media/w0o33qmdai9wpr/product_thumb_medium_and_small/Anvil.png',
              component_description:
                '/media/w0o33qmdai9wpr/component_description/Anvil.png',
              product_thumb_in_description:
                '/media/w0o33qmdai9wpr/product_thumb_in_description/Anvil.png',
              product_thumb_shipmod:
                '/media/w0o33qmdai9wpr/product_thumb_shipmod/Anvil.png',
              press_latest_post:
                '/media/w0o33qmdai9wpr/press_latest_post/Anvil.png',
              store_small: '/media/w0o33qmdai9wpr/store_small/Anvil.png',
              store_large: '/media/w0o33qmdai9wpr/store_large/Anvil.png',
              store_hub_small:
                '/media/w0o33qmdai9wpr/store_hub_small/Anvil.png',
              store_hub_large:
                '/media/w0o33qmdai9wpr/store_hub_large/Anvil.png',
              store_slideshow_small:
                '/media/w0o33qmdai9wpr/store_slideshow_small/Anvil.png',
              store_slideshow_large:
                '/media/w0o33qmdai9wpr/store_slideshow_large/Anvil.png',
              store_slideshow_small_zoom:
                '/media/w0o33qmdai9wpr/store_slideshow_small_zoom/Anvil.png',
              store_slideshow_large_zoom:
                '/media/w0o33qmdai9wpr/store_slideshow_large_zoom/Anvil.png',
              store_thumb_listing_small:
                '/media/w0o33qmdai9wpr/store_thumb_listing_small/Anvil.png',
              store_thumb_sku_detail:
                '/media/w0o33qmdai9wpr/store_thumb_sku_detail/Anvil.png',
              store_upgrade_half:
                '/media/w0o33qmdai9wpr/store_upgrade_half/Anvil.png',
              sku_widget_thumbnail:
                '/media/w0o33qmdai9wpr/sku_widget_thumbnail/Anvil.png',
              sku_widget_modal:
                '/media/w0o33qmdai9wpr/sku_widget_modal/Anvil.png',
              avatar: '/media/w0o33qmdai9wpr/avatar/Anvil.png',
              banner: '/media/w0o33qmdai9wpr/banner/Anvil.png',
              cover: '/media/w0o33qmdai9wpr/cover/Anvil.png',
              logo: '/media/w0o33qmdai9wpr/logo/Anvil.png',
              icon: '/media/w0o33qmdai9wpr/icon/Anvil.png',
              background_blur:
                '/media/w0o33qmdai9wpr/background_blur/Anvil.png',
              texture: '/media/w0o33qmdai9wpr/texture/Anvil.png',
              hub_large: '/media/w0o33qmdai9wpr/hub_large/Anvil.png',
              hub_medium: '/media/w0o33qmdai9wpr/hub_medium/Anvil.png',
              hub_small: '/media/w0o33qmdai9wpr/hub_small/Anvil.png',
              hub_tile: '/media/w0o33qmdai9wpr/hub_tile/Anvil.png',
              wallpaper_3840x2160:
                '/media/w0o33qmdai9wpr/wallpaper_3840x2160/Anvil.png',
              wallpaper_1920x1080:
                '/media/w0o33qmdai9wpr/wallpaper_1920x1080/Anvil.png',
              wallpaper_512x384:
                '/media/w0o33qmdai9wpr/wallpaper_512x384/Anvil.png',
              wsc_event_thumb:
                '/media/w0o33qmdai9wpr/wsc_event_thumb/Anvil.png',
              manufacturer_logo_xs:
                '/media/w0o33qmdai9wpr/manufacturer_logo_xs/Anvil.png',
            },
            'membership.id': '448150',
            'membership.slot': 'icon',
          },
        ],
      },
    })
  }

  if (!rawShipMatrixData.find((e) => e.name === 'F8C Lightning')) {
    rawShipMatrixData.push({
      name: 'F8C Lightning',
      url: '/pledge/ships/anvil-f8/F8C-Lightning',
      type: 'Combat',
      focus: 'Heavy Fighter',
      manufacturer: {
        id: '3',
        code: 'ANVL',
        description:
          'Produces dogfighters, but with less of the pirate stigma. These ships are more expensive, less spit-and-glue',
        known_for: 'the Hornet Fighters',
        name: 'Anvil Aerospace',
        media: [
          {
            id: '312955',
            cover_data: null,
            depot: 'LOCAL_MEDIA',
            depot_status: 'R',
            derived_data: {
              sizes: {
                heap_note: {
                  width: 24,
                  height: 24,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                heap_thumb: {
                  width: 61,
                  height: 61,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                heap_infobox: {
                  width: 165,
                  height: 165,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                post_section_header: {
                  width: 1118,
                  height: 351,
                  mode: 'resize-crop',
                },
                channel_item_full: {
                  width: 1119,
                  height: 600,
                  mode: 'resize-crop',
                },
                home_transmissions_item_expanded: {
                  width: 530,
                  height: 280,
                  mode: 'resize-crop',
                },
                subscribers_vault_thumbnail: {
                  width: 216,
                  height: 133,
                  mode: 'resize-crop',
                },
                slideshow: {
                  width: 648,
                  height: 366,
                  mode: 'resize-crop',
                },
                slideshow_pager: {
                  width: 88,
                  height: 50,
                  mode: 'resize-crop',
                },
                vault_thumb: {
                  width: 335,
                  height: null,
                  mode: 'resize',
                },
                post: {
                  width: 500,
                  height: null,
                  mode: 'resize',
                },
                wallpaper_thumb: {
                  width: 620,
                  height: 400,
                  mode: 'resize-crop',
                },
                product_thumb_large: {
                  width: 341,
                  height: 204,
                  mode: 'resize-crop',
                },
                product_thumb_medium_and_small: {
                  width: 180,
                  height: 150,
                  mode: 'resize-crop',
                },
                component_description: {
                  width: 415,
                  height: null,
                  mode: 'resize',
                },
                product_thumb_in_description: {
                  width: 350,
                  height: 350,
                  mode: 'resize-crop',
                },
                product_thumb_shipmod: {
                  width: 248,
                  height: 188,
                  mode: 'resize-crop',
                },
                press_latest_post: {
                  width: 509,
                  height: 211,
                  mode: 'resize-crop',
                },
                store_small: {
                  width: 351,
                  height: 210,
                  mode: 'resize-crop',
                },
                store_large: {
                  width: 818,
                  height: 288,
                  mode: 'resize-crop',
                },
                store_hub_small: {
                  width: 600,
                  height: 210,
                  mode: 'resize-crop',
                },
                store_hub_large: {
                  width: 1200,
                  height: 420,
                  mode: 'resize-crop',
                },
                store_slideshow_small: {
                  width: 800,
                  height: 300,
                  mode: 'resize-crop',
                },
                store_slideshow_large: {
                  width: 1140,
                  height: 390,
                  mode: 'resize-crop',
                },
                store_slideshow_small_zoom: {
                  width: 710,
                  height: 516,
                  mode: 'resize-crop',
                },
                store_slideshow_large_zoom: {
                  width: 1420,
                  height: 1032,
                  mode: 'resize-crop',
                },
                store_thumb_listing_small: {
                  width: 186,
                  height: 63,
                  mode: 'resize-crop',
                },
                store_thumb_sku_detail: {
                  width: 318,
                  height: 248,
                  mode: 'resize-crop',
                },
                avatar: {
                  width: 76,
                  height: 76,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                banner: {
                  width: 1140,
                  height: 380,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                cover: {
                  width: 1140,
                  height: '',
                  mode: 'resize',
                  delete: '1--1',
                },
                logo: {
                  width: 175,
                  height: 175,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                icon: {
                  width: 45,
                  height: 45,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                background_blur: {
                  width: 1366,
                  height: 768,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
              },
            },
            distant_id: null,
            distant_source: null,
            publish_end: null,
            publish_start: null,
            purpose: 'full',
            slug: 'w0o33qmdai9wp',
            source_duration: null,
            source_extension: 'png',
            source_name: 'Anvil',
            status: 'P',
            tag_string: '',
            time_modified: '2014-08-04 13:09:26',
            type: 'I',
            source_url: '/media/w0o33qmdai9wpr/source/Anvil.png',
            source_stream: {
              progressive: '/media/w0o33qmdai9wpr/source/Anvil.png',
            },
            images: {
              heap_note: '/media/w0o33qmdai9wpr/heap_note/Anvil.png',
              heap_thumb: '/media/w0o33qmdai9wpr/heap_thumb/Anvil.png',
              heap_infobox: '/media/w0o33qmdai9wpr/heap_infobox/Anvil.png',
              tavern_upload_emoji:
                '/media/w0o33qmdai9wpr/tavern_upload_emoji/Anvil.png',
              tavern_upload_mini:
                '/media/w0o33qmdai9wpr/tavern_upload_mini/Anvil.png',
              tavern_upload_square:
                '/media/w0o33qmdai9wpr/tavern_upload_square/Anvil.png',
              tavern_upload_small:
                '/media/w0o33qmdai9wpr/tavern_upload_small/Anvil.png',
              tavern_upload_medium:
                '/media/w0o33qmdai9wpr/tavern_upload_medium/Anvil.png',
              tavern_upload_large:
                '/media/w0o33qmdai9wpr/tavern_upload_large/Anvil.png',
              post_section_header:
                '/media/w0o33qmdai9wpr/post_section_header/Anvil.png',
              channel_item_full:
                '/media/w0o33qmdai9wpr/channel_item_full/Anvil.png',
              home_transmissions_item_expanded:
                '/media/w0o33qmdai9wpr/home_transmissions_item_expanded/Anvil.png',
              subscribers_vault_thumbnail:
                '/media/w0o33qmdai9wpr/subscribers_vault_thumbnail/Anvil.png',
              slideshow: '/media/w0o33qmdai9wpr/slideshow/Anvil.png',
              slideshow_pager:
                '/media/w0o33qmdai9wpr/slideshow_pager/Anvil.png',
              slideshow_wide: '/media/w0o33qmdai9wpr/slideshow_wide/Anvil.png',
              vault_thumb: '/media/w0o33qmdai9wpr/vault_thumb/Anvil.png',
              post: '/media/w0o33qmdai9wpr/post/Anvil.png',
              wallpaper_thumb:
                '/media/w0o33qmdai9wpr/wallpaper_thumb/Anvil.png',
              product_thumb_large:
                '/media/w0o33qmdai9wpr/product_thumb_large/Anvil.png',
              product_thumb_medium_and_small:
                '/media/w0o33qmdai9wpr/product_thumb_medium_and_small/Anvil.png',
              component_description:
                '/media/w0o33qmdai9wpr/component_description/Anvil.png',
              product_thumb_in_description:
                '/media/w0o33qmdai9wpr/product_thumb_in_description/Anvil.png',
              product_thumb_shipmod:
                '/media/w0o33qmdai9wpr/product_thumb_shipmod/Anvil.png',
              press_latest_post:
                '/media/w0o33qmdai9wpr/press_latest_post/Anvil.png',
              store_small: '/media/w0o33qmdai9wpr/store_small/Anvil.png',
              store_large: '/media/w0o33qmdai9wpr/store_large/Anvil.png',
              store_hub_small:
                '/media/w0o33qmdai9wpr/store_hub_small/Anvil.png',
              store_hub_large:
                '/media/w0o33qmdai9wpr/store_hub_large/Anvil.png',
              store_slideshow_small:
                '/media/w0o33qmdai9wpr/store_slideshow_small/Anvil.png',
              store_slideshow_large:
                '/media/w0o33qmdai9wpr/store_slideshow_large/Anvil.png',
              store_slideshow_small_zoom:
                '/media/w0o33qmdai9wpr/store_slideshow_small_zoom/Anvil.png',
              store_slideshow_large_zoom:
                '/media/w0o33qmdai9wpr/store_slideshow_large_zoom/Anvil.png',
              store_thumb_listing_small:
                '/media/w0o33qmdai9wpr/store_thumb_listing_small/Anvil.png',
              store_thumb_sku_detail:
                '/media/w0o33qmdai9wpr/store_thumb_sku_detail/Anvil.png',
              store_upgrade_half:
                '/media/w0o33qmdai9wpr/store_upgrade_half/Anvil.png',
              sku_widget_thumbnail:
                '/media/w0o33qmdai9wpr/sku_widget_thumbnail/Anvil.png',
              sku_widget_modal:
                '/media/w0o33qmdai9wpr/sku_widget_modal/Anvil.png',
              avatar: '/media/w0o33qmdai9wpr/avatar/Anvil.png',
              banner: '/media/w0o33qmdai9wpr/banner/Anvil.png',
              cover: '/media/w0o33qmdai9wpr/cover/Anvil.png',
              logo: '/media/w0o33qmdai9wpr/logo/Anvil.png',
              icon: '/media/w0o33qmdai9wpr/icon/Anvil.png',
              background_blur:
                '/media/w0o33qmdai9wpr/background_blur/Anvil.png',
              texture: '/media/w0o33qmdai9wpr/texture/Anvil.png',
              hub_large: '/media/w0o33qmdai9wpr/hub_large/Anvil.png',
              hub_medium: '/media/w0o33qmdai9wpr/hub_medium/Anvil.png',
              hub_small: '/media/w0o33qmdai9wpr/hub_small/Anvil.png',
              hub_tile: '/media/w0o33qmdai9wpr/hub_tile/Anvil.png',
              wallpaper_3840x2160:
                '/media/w0o33qmdai9wpr/wallpaper_3840x2160/Anvil.png',
              wallpaper_1920x1080:
                '/media/w0o33qmdai9wpr/wallpaper_1920x1080/Anvil.png',
              wallpaper_512x384:
                '/media/w0o33qmdai9wpr/wallpaper_512x384/Anvil.png',
              wsc_event_thumb:
                '/media/w0o33qmdai9wpr/wsc_event_thumb/Anvil.png',
              manufacturer_logo_xs:
                '/media/w0o33qmdai9wpr/manufacturer_logo_xs/Anvil.png',
            },
            'membership.id': '448150',
            'membership.slot': 'icon',
          },
        ],
      },
    })
  }

  if (
    !rawShipMatrixData.find((e) => e.name === 'F8C Lightning Executive Edition')
  ) {
    rawShipMatrixData.push({
      name: 'F8C Lightning Executive Edition',
      url: '/pledge/ships/anvil-f8/F8C-Lightning-Executive',
      type: 'Combat',
      focus: 'Heavy Fighter',
      manufacturer: {
        id: '3',
        code: 'ANVL',
        description:
          'Produces dogfighters, but with less of the pirate stigma. These ships are more expensive, less spit-and-glue',
        known_for: 'the Hornet Fighters',
        name: 'Anvil Aerospace',
        media: [
          {
            id: '312955',
            cover_data: null,
            depot: 'LOCAL_MEDIA',
            depot_status: 'R',
            derived_data: {
              sizes: {
                heap_note: {
                  width: 24,
                  height: 24,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                heap_thumb: {
                  width: 61,
                  height: 61,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                heap_infobox: {
                  width: 165,
                  height: 165,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                post_section_header: {
                  width: 1118,
                  height: 351,
                  mode: 'resize-crop',
                },
                channel_item_full: {
                  width: 1119,
                  height: 600,
                  mode: 'resize-crop',
                },
                home_transmissions_item_expanded: {
                  width: 530,
                  height: 280,
                  mode: 'resize-crop',
                },
                subscribers_vault_thumbnail: {
                  width: 216,
                  height: 133,
                  mode: 'resize-crop',
                },
                slideshow: {
                  width: 648,
                  height: 366,
                  mode: 'resize-crop',
                },
                slideshow_pager: {
                  width: 88,
                  height: 50,
                  mode: 'resize-crop',
                },
                vault_thumb: {
                  width: 335,
                  height: null,
                  mode: 'resize',
                },
                post: {
                  width: 500,
                  height: null,
                  mode: 'resize',
                },
                wallpaper_thumb: {
                  width: 620,
                  height: 400,
                  mode: 'resize-crop',
                },
                product_thumb_large: {
                  width: 341,
                  height: 204,
                  mode: 'resize-crop',
                },
                product_thumb_medium_and_small: {
                  width: 180,
                  height: 150,
                  mode: 'resize-crop',
                },
                component_description: {
                  width: 415,
                  height: null,
                  mode: 'resize',
                },
                product_thumb_in_description: {
                  width: 350,
                  height: 350,
                  mode: 'resize-crop',
                },
                product_thumb_shipmod: {
                  width: 248,
                  height: 188,
                  mode: 'resize-crop',
                },
                press_latest_post: {
                  width: 509,
                  height: 211,
                  mode: 'resize-crop',
                },
                store_small: {
                  width: 351,
                  height: 210,
                  mode: 'resize-crop',
                },
                store_large: {
                  width: 818,
                  height: 288,
                  mode: 'resize-crop',
                },
                store_hub_small: {
                  width: 600,
                  height: 210,
                  mode: 'resize-crop',
                },
                store_hub_large: {
                  width: 1200,
                  height: 420,
                  mode: 'resize-crop',
                },
                store_slideshow_small: {
                  width: 800,
                  height: 300,
                  mode: 'resize-crop',
                },
                store_slideshow_large: {
                  width: 1140,
                  height: 390,
                  mode: 'resize-crop',
                },
                store_slideshow_small_zoom: {
                  width: 710,
                  height: 516,
                  mode: 'resize-crop',
                },
                store_slideshow_large_zoom: {
                  width: 1420,
                  height: 1032,
                  mode: 'resize-crop',
                },
                store_thumb_listing_small: {
                  width: 186,
                  height: 63,
                  mode: 'resize-crop',
                },
                store_thumb_sku_detail: {
                  width: 318,
                  height: 248,
                  mode: 'resize-crop',
                },
                avatar: {
                  width: 76,
                  height: 76,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                banner: {
                  width: 1140,
                  height: 380,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                cover: {
                  width: 1140,
                  height: '',
                  mode: 'resize',
                  delete: '1--1',
                },
                logo: {
                  width: 175,
                  height: 175,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                icon: {
                  width: 45,
                  height: 45,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
                background_blur: {
                  width: 1366,
                  height: 768,
                  mode: 'resize-crop',
                  delete: '1--1',
                },
              },
            },
            distant_id: null,
            distant_source: null,
            publish_end: null,
            publish_start: null,
            purpose: 'full',
            slug: 'w0o33qmdai9wp',
            source_duration: null,
            source_extension: 'png',
            source_name: 'Anvil',
            status: 'P',
            tag_string: '',
            time_modified: '2014-08-04 13:09:26',
            type: 'I',
            source_url: '/media/w0o33qmdai9wpr/source/Anvil.png',
            source_stream: {
              progressive: '/media/w0o33qmdai9wpr/source/Anvil.png',
            },
            images: {
              heap_note: '/media/w0o33qmdai9wpr/heap_note/Anvil.png',
              heap_thumb: '/media/w0o33qmdai9wpr/heap_thumb/Anvil.png',
              heap_infobox: '/media/w0o33qmdai9wpr/heap_infobox/Anvil.png',
              tavern_upload_emoji:
                '/media/w0o33qmdai9wpr/tavern_upload_emoji/Anvil.png',
              tavern_upload_mini:
                '/media/w0o33qmdai9wpr/tavern_upload_mini/Anvil.png',
              tavern_upload_square:
                '/media/w0o33qmdai9wpr/tavern_upload_square/Anvil.png',
              tavern_upload_small:
                '/media/w0o33qmdai9wpr/tavern_upload_small/Anvil.png',
              tavern_upload_medium:
                '/media/w0o33qmdai9wpr/tavern_upload_medium/Anvil.png',
              tavern_upload_large:
                '/media/w0o33qmdai9wpr/tavern_upload_large/Anvil.png',
              post_section_header:
                '/media/w0o33qmdai9wpr/post_section_header/Anvil.png',
              channel_item_full:
                '/media/w0o33qmdai9wpr/channel_item_full/Anvil.png',
              home_transmissions_item_expanded:
                '/media/w0o33qmdai9wpr/home_transmissions_item_expanded/Anvil.png',
              subscribers_vault_thumbnail:
                '/media/w0o33qmdai9wpr/subscribers_vault_thumbnail/Anvil.png',
              slideshow: '/media/w0o33qmdai9wpr/slideshow/Anvil.png',
              slideshow_pager:
                '/media/w0o33qmdai9wpr/slideshow_pager/Anvil.png',
              slideshow_wide: '/media/w0o33qmdai9wpr/slideshow_wide/Anvil.png',
              vault_thumb: '/media/w0o33qmdai9wpr/vault_thumb/Anvil.png',
              post: '/media/w0o33qmdai9wpr/post/Anvil.png',
              wallpaper_thumb:
                '/media/w0o33qmdai9wpr/wallpaper_thumb/Anvil.png',
              product_thumb_large:
                '/media/w0o33qmdai9wpr/product_thumb_large/Anvil.png',
              product_thumb_medium_and_small:
                '/media/w0o33qmdai9wpr/product_thumb_medium_and_small/Anvil.png',
              component_description:
                '/media/w0o33qmdai9wpr/component_description/Anvil.png',
              product_thumb_in_description:
                '/media/w0o33qmdai9wpr/product_thumb_in_description/Anvil.png',
              product_thumb_shipmod:
                '/media/w0o33qmdai9wpr/product_thumb_shipmod/Anvil.png',
              press_latest_post:
                '/media/w0o33qmdai9wpr/press_latest_post/Anvil.png',
              store_small: '/media/w0o33qmdai9wpr/store_small/Anvil.png',
              store_large: '/media/w0o33qmdai9wpr/store_large/Anvil.png',
              store_hub_small:
                '/media/w0o33qmdai9wpr/store_hub_small/Anvil.png',
              store_hub_large:
                '/media/w0o33qmdai9wpr/store_hub_large/Anvil.png',
              store_slideshow_small:
                '/media/w0o33qmdai9wpr/store_slideshow_small/Anvil.png',
              store_slideshow_large:
                '/media/w0o33qmdai9wpr/store_slideshow_large/Anvil.png',
              store_slideshow_small_zoom:
                '/media/w0o33qmdai9wpr/store_slideshow_small_zoom/Anvil.png',
              store_slideshow_large_zoom:
                '/media/w0o33qmdai9wpr/store_slideshow_large_zoom/Anvil.png',
              store_thumb_listing_small:
                '/media/w0o33qmdai9wpr/store_thumb_listing_small/Anvil.png',
              store_thumb_sku_detail:
                '/media/w0o33qmdai9wpr/store_thumb_sku_detail/Anvil.png',
              store_upgrade_half:
                '/media/w0o33qmdai9wpr/store_upgrade_half/Anvil.png',
              sku_widget_thumbnail:
                '/media/w0o33qmdai9wpr/sku_widget_thumbnail/Anvil.png',
              sku_widget_modal:
                '/media/w0o33qmdai9wpr/sku_widget_modal/Anvil.png',
              avatar: '/media/w0o33qmdai9wpr/avatar/Anvil.png',
              banner: '/media/w0o33qmdai9wpr/banner/Anvil.png',
              cover: '/media/w0o33qmdai9wpr/cover/Anvil.png',
              logo: '/media/w0o33qmdai9wpr/logo/Anvil.png',
              icon: '/media/w0o33qmdai9wpr/icon/Anvil.png',
              background_blur:
                '/media/w0o33qmdai9wpr/background_blur/Anvil.png',
              texture: '/media/w0o33qmdai9wpr/texture/Anvil.png',
              hub_large: '/media/w0o33qmdai9wpr/hub_large/Anvil.png',
              hub_medium: '/media/w0o33qmdai9wpr/hub_medium/Anvil.png',
              hub_small: '/media/w0o33qmdai9wpr/hub_small/Anvil.png',
              hub_tile: '/media/w0o33qmdai9wpr/hub_tile/Anvil.png',
              wallpaper_3840x2160:
                '/media/w0o33qmdai9wpr/wallpaper_3840x2160/Anvil.png',
              wallpaper_1920x1080:
                '/media/w0o33qmdai9wpr/wallpaper_1920x1080/Anvil.png',
              wallpaper_512x384:
                '/media/w0o33qmdai9wpr/wallpaper_512x384/Anvil.png',
              wsc_event_thumb:
                '/media/w0o33qmdai9wpr/wsc_event_thumb/Anvil.png',
              manufacturer_logo_xs:
                '/media/w0o33qmdai9wpr/manufacturer_logo_xs/Anvil.png',
            },
            'membership.id': '448150',
            'membership.slot': 'icon',
          },
        ],
      },
    })
  }

  function filterRawSMShips() {
    skippedShips.forEach((i) => {
      const item = rawShipMatrixData.find((e) => e.name === i)
      if (item) {
        const index = rawShipMatrixData.indexOf(item)
        if (index > -1) {
          rawShipMatrixData.splice(index, 1)
        }
      }
    })
  }

  filterRawSMShips()

  await Promise.all(
    rawShipMatrixData.map(async (obj) => {
      if (obj.name === 'Mercury') {
        obj.name = 'Mercury Star Runner'
      }
      let slug = string_to_slug(obj.name.toLowerCase())
      if (slugOverwrites.find((e) => e.ship === slug)) {
        const newSlug = slugOverwrites.find((e) => e.ship === slug).slug
        slug = newSlug
      }
      const liveData = liveShipData.find((e) => e.slug == slug)

      let flSlug = slug
      if (flSlugOverwrites.find((e) => e.ship === slug)) {
        const newSlug = flSlugOverwrites.find((e) => e.ship === slug).slug
        flSlug = newSlug
      }

      const flData = await getFlShip(flSlug)
      const flPaints = await getFlPaints(flSlug)
      const flModules = await getFlModules(flSlug)
      const scwData = await getScwShip(flSlug)

      const company = manufacturers.filter(
        (e) =>
          e.code === obj.manufacturer.code ||
          e.firmen_name == obj.manufacturer.name
      )[0]

      function setSize(size) {
        let label
        size == 'vehicle' || size == 'xs'
          ? (label = 0)
          : size == 'snub' || size == 's'
          ? (label = 1)
          : size == 'small' || size == 'm'
          ? (label = 2)
          : size == 'medium' || size == 'l'
          ? (label = 3)
          : size == 'large' || size == 'xl'
          ? (label = 4)
          : size == 'capital' || size == 'c'
          ? (label = 5)
          : null

        return label
      }

      let size = setSize(obj.size)
      if (!size) {
        if (obj.name.includes('Spirit')) {
          const orgShip = rawShipMatrixData.find((e) => e.name == 'C1 Spirit')
          size = setSize(orgShip.size)
        } else if (obj.name.includes('F8C')) {
          size = 2
        } else if (obj.name == 'G12') {
          size = 0
        } else if (obj.name == 'Railen') {
          size = 4
        }
      }

      let p4kCompany

      if (
        (!company.firmen_name.startsWith('Consolidated') &&
          company.firmen_name.split(' ').length <= 2) ||
        company.firmen_name.startsWith('Tumbril')
      ) {
        p4kCompany = company.firmen_name.split(' ')[0]
      } else if (company.firmen_name.startsWith('Consolidated')) {
        p4kCompany = 'C.O.'
      } else {
        p4kCompany = company.code
      }

      let p4kId = null
      if (obj.name.includes('Idris-M')) {
        p4kId = p4kCompany + ' Idris'
      } else if (obj.name.includes('Best In Show Edition')) {
        const ship = obj.name.substring(
          0,
          obj.name.indexOf(' Best In Show Edition')
        )
        p4kId = p4kCompany + ' ' + ship
      } else if (obj.name.includes('Pirate Gladius')) {
        p4kId = p4kCompany + ' ' + obj.name.replace('Pirate ', '')
      } else if (obj.name.includes('Heartseeker')) {
        p4kId = p4kCompany + ' ' + obj.name.replace('Super ', '')
      } else if (obj.name.includes('F8A')) {
        p4kId = p4kCompany + ' ' + obj.name.replace('F8A', 'F8')
      } else if (obj.name.includes('Dragonfly')) {
        p4kId = p4kCompany + ' ' + 'Dragonfly'
      } else if (obj.name === '600i Explorer') {
        p4kId = p4kCompany + ' ' + obj.name.replace(' Explorer', '')
      } else if (obj.name === 'Ares Inferno ') {
        p4kId =
          p4kCompany +
          ' ' +
          obj.name.replace('Ares Inferno ', 'Ares Star Fighter Inferno')
      } else if (obj.name === 'Ares Ion') {
        p4kId =
          p4kCompany +
          ' ' +
          obj.name.replace('Ares Ion', 'Ares Star Fighter Ion')
      } else if (obj.name === 'Retaliator Bomber') {
        p4kId = p4kCompany + ' ' + obj.name.replace(' Bomber', '')
      } else if (obj.name.includes(' Fortuna')) {
        p4kId = p4kCompany + ' ' + obj.name.replace(' Fortuna', '')
      } else {
        p4kId = p4kCompany + ' ' + obj.name.trim()
      }

      const p4kData = rawP4kShips.filter((e) =>
        e.Name.toLowerCase().startsWith(p4kId.toLowerCase())
      )[0]
      const p4kHardpoints = await getP4kShipHardpoints(
        p4kData?.ClassName.toLowerCase()
      )

      let p4kRoles = []
      if (p4kData?.Role.includes('/')) {
        p4kData?.Role.split('/').map((i) => {
          p4kRoles.push({ role: i.trim().toLowerCase() })
        })
      } else {
        p4kRoles.push({ role: p4kData?.Role.trim().toLowerCase() })
      }

      let smRoles = []
      if (obj.focus?.includes('/')) {
        obj.focus.split('/').map((i) => {
          smRoles.push({ role: i.trim().toLowerCase() })
        })
      } else {
        smRoles.push({ role: obj.focus?.trim().toLowerCase() })
      }

      const variants = []
      rawShipMatrixData.forEach((i) => {
        const currentUrl = obj.url.split('/').splice(3, 3)
        const variantUrl = i.url?.split('/').splice(3, 3)

        if (currentUrl[0] === variantUrl[0]) {
          const variant = liveShipData.find((e) => e.name === i.name)

          if (i.name != obj.name) {
            variants.push({
              id: variant?.id,
              name: i.name,
              slug: i.slug || string_to_slug(i.name.toLowerCase()),
            })
          }
        }
      })

      function findComponendId(name) {
        const component = components.filter((e) => e.name === name)

        return component
      }

      const hardpoints = []
      if (p4kHardpoints) {
        p4kHardpoints.PowerPlants.forEach((i) => {
          const component = findComponendId(i.InstalledItem?.Name)[0]

          const hardpoint = {
            type: 'powerplant',
            size: i.size,
            component: component?.id,
          }

          hardpoints.push(hardpoint)
        })

        p4kHardpoints.Coolers.forEach((i) => {
          const component = findComponendId(i.InstalledItem?.Name)[0]

          const hardpoint = {
            type: 'cooler',
            size: i.size,
            component: component?.id,
          }

          hardpoints.push(hardpoint)
        })

        p4kHardpoints.Shields.forEach((i) => {
          const component = findComponendId(i.InstalledItem?.Name)[0]

          const hardpoint = {
            type: 'shield',
            size: i.size,
            component: component?.id,
          }

          hardpoints.push(hardpoint)
        })

        p4kHardpoints.QuantumDrives.forEach((i) => {
          const component = findComponendId(i.InstalledItem?.Name)[0]

          const hardpoint = {
            type: 'quantumdrive',
            size: i.size,
            component: component?.id,
          }

          hardpoints.push(hardpoint)
        })

        obj.compiled?.RSIPropulsion.jump_modules.forEach((i) => {
          Array.from(Array(i.mounts)).forEach(() => {
            const hardpoint = {
              type: 'shieldgenerator',
              size: setSize(i.size.toLowerCase()),
              componentSize: setSize(i.component_size.toLowerCase()),
            }

            hardpoints.push(hardpoint)
          })
        })

        p4kHardpoints.QuantumFuelTanks.forEach((i) => {
          const hardpoint = {
            type: 'quantumfueltank',
            size: i.size,
            componentSize: i?.InstalledItem?.Size,
          }

          hardpoints.push(hardpoint)
        })

        p4kHardpoints.HydrogenFuelTanks.forEach((i) => {
          const hardpoint = {
            type: 'hydrogenfueltank',
            size: i.size,
            componentSize: i?.InstalledItem?.Size,
          }

          hardpoints.push(hardpoint)
        })

        p4kHardpoints.HydogenFuelIntakes.forEach((i) => {
          const hardpoint = {
            type: 'hydrogenfuelintake',
            size: i.size,
            componentSize: i?.InstalledItem?.Size,
          }

          hardpoints.push(hardpoint)
        })

        obj.compiled?.RSIAvionic.radar.forEach((i) => {
          Array.from(Array(i.mounts)).forEach(() => {
            const hardpoint = {
              type: 'radar',
              size: setSize(i.size.toLowerCase()),
              componentSize: setSize(i.component_size.toLowerCase()),
            }

            hardpoints.push(hardpoint)
          })
        })

        obj.compiled?.RSIAvionic.computers.forEach((i) => {
          Array.from(Array(i.mounts)).forEach(() => {
            const hardpoint = {
              type: 'computer',
              size: setSize(i.size.toLowerCase()),
              componentSize: setSize(i.component_size.toLowerCase()),
            }

            hardpoints.push(hardpoint)
          })
        })

        p4kHardpoints.MainThrusters.forEach((i) => {
          const hardpoint = {
            type: 'mainthruster',
            category: 'M',
            size: i.size,
            componentSize: i?.InstalledItem?.Size,
          }

          hardpoints.push(hardpoint)
        })

        p4kHardpoints.RetroThrusters.forEach((i) => {
          const hardpoint = {
            type: 'retrothruster',
            category: 'R',
            size: i.size,
            componentSize: i?.InstalledItem?.Size,
          }

          hardpoints.push(hardpoint)
        })

        p4kHardpoints.VtolThrusters.forEach((i) => {
          const hardpoint = {
            type: 'vtolthruster',
            category: 'V',
            size: i.size,
            componentSize: i?.InstalledItem?.Size,
          }

          hardpoints.push(hardpoint)
        })

        p4kHardpoints.ManeuveringThrusters.filter(
          (e) => e.InstalledItem?.Type === 'ManneuverThruster.FixedThruster'
        ).forEach((i) => {
          const hardpoint = {
            type: 'fixedmaneuveringthruster',
            category: 'F',
            size: i.size,
            componentSize: i?.InstalledItem?.Size,
          }

          hardpoints.push(hardpoint)
        })

        p4kHardpoints.ManeuveringThrusters.filter(
          (e) => e.InstalledItem?.Type === 'ManneuverThruster.JointThruster'
        ).forEach((i) => {
          const hardpoint = {
            type: 'gimbaledmaneuveringthruster',
            category: 'G',
            size: i.size,
            componentSize: i?.InstalledItem?.Size,
          }

          hardpoints.push(hardpoint)
        })
      } else {
        obj.compiled?.RSIModular.power_plants.forEach((i) => {
          const component = findComponendId(i.name)[0]

          Array.from(Array(i.mounts)).forEach(() => {
            const hardpoint = {
              type: 'powerplant',
              size: setSize(i.size.toLowerCase()),
              componentSize: setSize(i.component_size.toLowerCase()),
              component: component?.id,
            }

            hardpoints.push(hardpoint)
          })
        })

        obj.compiled?.RSIModular.coolers.forEach((i) => {
          const component = findComponendId(i.name)[0]

          Array.from(Array(i.mounts)).forEach(() => {
            const hardpoint = {
              type: 'cooler',
              size: setSize(i.size.toLowerCase()),
              componentSize: setSize(i.component_size.toLowerCase()),
              component: component?.id,
            }

            hardpoints.push(hardpoint)
          })
        })

        obj.compiled?.RSIModular.shield_generators.forEach((i) => {
          const component = findComponendId(i.name)[0]

          Array.from(Array(i.mounts)).forEach(() => {
            const hardpoint = {
              type: 'shieldgenerator',
              size: setSize(i.size.toLowerCase()),
              componentSize: setSize(i.component_size.toLowerCase()),
              component: component?.id,
            }

            hardpoints.push(hardpoint)
          })
        })

        obj.compiled?.RSIPropulsion.quantum_drives.forEach((i) => {
          const component = findComponendId(i.name)[0]

          Array.from(Array(i.mounts)).forEach(() => {
            const hardpoint = {
              type: 'shieldgenerator',
              size: setSize(i.size.toLowerCase()),
              componentSize: setSize(i.component_size.toLowerCase()),
              component: component?.id,
            }

            hardpoints.push(hardpoint)
          })
        })

        obj.compiled?.RSIPropulsion.jump_modules.forEach((i) => {
          Array.from(Array(i.mounts)).forEach(() => {
            const hardpoint = {
              type: 'shieldgenerator',
              size: setSize(i.size.toLowerCase()),
              componentSize: setSize(i.component_size.toLowerCase()),
            }

            hardpoints.push(hardpoint)
          })
        })

        obj.compiled?.RSIPropulsion.quantum_fuel_tanks.forEach((i) => {
          Array.from(Array(i.mounts)).forEach(() => {
            const hardpoint = {
              type: 'quantumfueltanks',
              size: setSize(i.size.toLowerCase()),
              componentSize: setSize(i.component_size.toLowerCase()),
            }

            hardpoints.push(hardpoint)
          })
        })

        obj.compiled?.RSIPropulsion.fuel_tanks.forEach((i) => {
          Array.from(Array(i.mounts)).forEach(() => {
            const hardpoint = {
              type: 'fueltanks',
              size: setSize(i.size.toLowerCase()),
              componentSize: setSize(i.component_size.toLowerCase()),
            }

            hardpoints.push(hardpoint)
          })
        })

        obj.compiled?.RSIPropulsion.fuel_intakes.forEach((i) => {
          Array.from(Array(i.mounts)).forEach(() => {
            const hardpoint = {
              type: 'hydrogenfuelintakes',
              size: setSize(i.size.toLowerCase()),
              componentSize: setSize(i.component_size.toLowerCase()),
            }

            hardpoints.push(hardpoint)
          })
        })

        obj.compiled?.RSIPropulsion.fuel_intakes.forEach((i) => {
          Array.from(Array(i.mounts)).forEach(() => {
            const hardpoint = {
              type: 'hydrogenfuelintakes',
              size: setSize(i.size.toLowerCase()),
              componentSize: setSize(i.component_size.toLowerCase()),
            }

            hardpoints.push(hardpoint)
          })
        })

        obj.compiled?.RSIAvionic.radar.forEach((i) => {
          Array.from(Array(i.mounts)).forEach(() => {
            const hardpoint = {
              type: 'radars',
              size: setSize(i.size.toLowerCase()),
              componentSize: setSize(i.component_size.toLowerCase()),
            }

            hardpoints.push(hardpoint)
          })
        })

        obj.compiled?.RSIAvionic.computers.forEach((i) => {
          Array.from(Array(i.mounts)).forEach(() => {
            const hardpoint = {
              type: 'computers',
              size: setSize(i.size.toLowerCase()),
              componentSize: setSize(i.component_size.toLowerCase()),
            }

            hardpoints.push(hardpoint)
          })
        })

        if (obj.compiled?.RSIThruster.main_thruster) {
          obj.compiled?.RSIThruster.main_thruster
            .filter((e) => e.category === 'M')
            .forEach((i) => {
              Array.from(Array(i.mounts)).forEach(() => {
                const hardpoint = {
                  type: 'mainthruster',
                  category: 'M',
                  size: setSize(i.size.toLowerCase()),
                  componentSize: setSize(i.component_size.toLowerCase()),
                }

                hardpoints.push(hardpoint)
              })
            })
        }

        if (obj.compiled?.RSIThruster.main_thruster) {
          obj.compiled?.RSIThruster.main_thruster
            .filter((e) => e.category === 'R')
            .forEach((i) => {
              Array.from(Array(i.mounts)).forEach(() => {
                const hardpoint = {
                  type: 'retrohruster',
                  category: 'R',
                  size: setSize(i.size.toLowerCase()),
                  componentSize: setSize(i.component_size.toLowerCase()),
                }

                hardpoints.push(hardpoint)
              })
            })
        }

        if (obj.compiled?.RSIThruster.maneuvering_thrusters) {
          obj.compiled?.RSIThruster.maneuvering_thrusters
            .filter((e) => e.category === 'G')
            .forEach((i) => {
              Array.from(Array(i.mounts)).forEach(() => {
                const hardpoint = {
                  type: 'gimbaledmaneuveringthruster',
                  category: 'G',
                  size: setSize(i.size.toLowerCase()),
                  componentSize: setSize(i.component_size.toLowerCase()),
                }

                hardpoints.push(hardpoint)
              })
            })
        }

        if (obj.compiled?.RSIThruster.maneuvering_thrusters) {
          obj.compiled?.RSIThruster.maneuvering_thrusters
            .filter((e) => e.category === 'F')
            .forEach((i) => {
              Array.from(Array(i.mounts)).forEach(() => {
                const hardpoint = {
                  type: 'fixedmaneuveringthruster',
                  category: 'F',
                  size: setSize(i.size.toLowerCase()),
                  componentSize: setSize(i.component_size.toLowerCase()),
                }

                hardpoints.push(hardpoint)
              })
            })
        }

        if (obj.compiled?.RSIThruster.maneuvering_thrusters) {
          obj.compiled?.RSIThruster.maneuvering_thrusters
            .filter((e) => e.category === 'V')
            .forEach((i) => {
              Array.from(Array(i.mounts)).forEach(() => {
                const hardpoint = {
                  type: 'vtolthruster',
                  category: 'V',
                  size: setSize(i.size.toLowerCase()),
                  componentSize: setSize(i.component_size.toLowerCase()),
                }

                hardpoints.push(hardpoint)
              })
            })
        }
      }

      const backendFiles = await getDirectusFiles()

      // const paints = []
      // if (flPaints[0]) {
      //   flPaints.forEach(async (i) => {
      //     const fileName = slug + '-' + i.slug
      //     const link = i.storeImage
      //     let fileId

      //     if (liveData?.paints?.find((e) => e.slug == i.slug).storeImage || backendFiles.find((e) => e.title == 'paint-' + fileName)) {
      //       fileId = backendFiles.find((e) => e.title == 'paint-' + fileName).id
      //     } else {
      //       const fileUpload = await uploadFile(link, fileName, 'paint')
      //       fileId = fileUpload.id
      //     }

      //     const paint = {
      //       name: i.name,
      //       slug: i.slug,
      //       nameWithModel: i.nameWithModel,
      //       storeImage: fileId,
      //     }

      //     paints.push(paint)
      //   })
      // }

      const modules = []
      if (flModules > 0) {
        flModules.forEach((i) => {
          const module = {
            name: i.name,
            description: i.description,
            pledgePrice: i.pledgePrice,
            price: i.price,
            storeImage: '',
            productionStatus: i.productionStatus,
            manufacturer: i.manufacturer.code,
          }

          modules.push(module)
        })
      }

      const ship = {
        status: 'published',
        name: obj.name,
        p4kMode: p4kData ? true : false,
        p4kId,
        slug,
        manufacturer: company.id,
        storeUrl: flData.storeUrl,
        salesPageUrl: flData.salesPageUrl,
        p4kName: p4kData?.Name,
        erkulIdentifier: p4kData?.ClassName.toLowerCase(),
        smIdentifier: obj.id,
        flIdentifier: flData.id,
        flSlug,
        length: obj.length,
        beam: obj.beam,
        height: obj.height,
        mass: p4kData ? p4kData.Mass : parseFloat(obj.mass),
        cargo: p4kData ? p4kData.Cargo : parseInt(obj.cargocapacity),
        size: p4kData ? p4kData.Size : size,
        price: flData.price,
        pledgePrice: flData.pledgePrice,
        onSale: flData.onSale,
        productionStatus: obj.production_status,
        productionNotes: obj.production_note,
        readyPatch: scwData?.version,
        career: obj.type?.toLowerCase(),
        role: p4kData ? p4kRoles : smRoles,
        hydrogenFuelTankSize: p4kData?.Propulsion.FuelCapacity,
        quantumFuelTankSize: p4kData?.QuantumTravel.FuelCapacity,
        minCrew: obj.min_crew,
        maxCrew: obj.max_crew,
        scmSpeed: p4kData
          ? p4kData.FlightCharacteristics.ScmSpeed
          : obj.scm_speed,
        afterburnerSpeed: p4kData
          ? p4kData.FlightCharacteristics.MaxSpeed
          : obj.afterburner_speed,
        groundSpeed: obj.scm_speed,
        afterburnerGroundSpeed: obj.afterburner_speed,
        zeroToScm: p4kData?.FlightCharacteristics.ZeroToScm,
        zeroToMax: p4kData?.FlightCharacteristics.ZeroToMax,
        scmToZero: p4kData?.FlightCharacteristics.ScmToZero,
        maxToZero: p4kData?.FlightCharacteristics.MaxToZero,
        pitchMax: obj.pitch_max,
        yawMax: obj.yaw_max,
        rollMax: obj.roll_max,
        xaxisAcceleration: obj.xaxis_acceleration,
        yaxisAcceleration: obj.yaxis_acceleration,
        zaxisAcceleration: obj.zaxis_acceleration,

        holoColored: flData.holoColored,

        hardpoints,
        variants,
        modules,
      }
      // storeImage: obj.media[0].source_url,

      ships.push(ship)
    })
  )

  return ships
}

export default async function handler(req, res) {
  const Datastore = await formData()
  // const Datastore = await uploadFile('https://fleetyards.net/uploads/model_paint/store_image/51/02/a624-da47-4c2d-9cac-04fbb54fce37/Star_Citizen_LunarNewYear_2023_Carrack_SKU_auspicious-4ade2b3e-bfb6-450c-93bd-5218a085f8d6.jpg', 'test-carrack', 'paint')

  if (req.method === 'GET') {
    res.status(200).send(Datastore)
  } else if (req.method === 'POST') {
    const matches = []
    await axios
      .get(
        'https://cms.ariscorp.de/items/ships?access_token=te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg&limit=-1'
      )
      .then((resp) => {
        Datastore.forEach((object, index) => {
          const directusData = resp.data.data
          const search = directusData.find(
            (element) => element.slug == object.slug
          )
          if (search != null) {
            axios
              .patch(
                `https://cms.ariscorp.de/items/ships/${search.id}?access_token=te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg`,
                object
              )
              .catch(function (error) {
                res.status(401).send(error)
              })
          } else {
            axios
              .post(
                `https://cms.ariscorp.de/items/ships?access_token=te_-ngsko7fb0r7FHplpGx2S4wXPy7Tg`,
                object
              )
              .catch(function (error) {
                res.status(401).send(error)
              })
          }
        })
      })
    res.status(200).send(Datastore)
  }
}
