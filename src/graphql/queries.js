const { gql } = require('@apollo/client')
// Hier werden alle Queries gespeichert und Exportiert

// INDEX QUERYS
export const GET_INDEX_THE_ARISCORP = gql`
  query GetTheArisCorp {
    die_ariscorp {
      about_ariscorp
    }
  }
`

export const GET_INDEX_ARISCORP_HISTORY = gql`
  query GetArisCorpHistory {
    ariscorp_history {
      ariscorp_history
    }
  }
`

export const GET_INDEX_ARISCORP_MANIFEST = gql`
  query GetArisCorpManifest {
    manifest {
      manifest
    }
  }
`

export const GET_INDEX_ARISCORP_CHARTA = gql`
  query GetArisCorpCharta {
    charta {
      text
    }
  }
`

export const GET_INDEX_ARISCORP_COMM_LINKS = gql`
  query GetIndexCommLinks {
    comm_links(
      filter: { status: { _eq: "published" } }
      sort: ["sort", "-date_created"]
      limit: 4
    ) {
      id
      status
      comm_link_titel
      comm_link_banner {
        id
      }
      comm_link_beschreibung
      comm_link_channel {
        channel
        beschreibung
      }
    }
  }
`

export const GET_INDEX_PARTNERS = gql`
  query GetPartner {
    partner(filter: { status: { _eq: "published" } }) {
      id
      partner_name
      partner_logo {
        id
      }
      partner_website
      date_created
    }
  }
`

export const GET_INDEX_DATA = gql`
  query GetIndexData {
    die_ariscorp {
      about_ariscorp
    }
    ariscorp_history {
      ariscorp_history
    }
    manifest {
      manifest
    }
    charta {
      text
    }
    comm_links(
      filter: { status: { _eq: "published" } }
      sort: ["sort", "-date_created"]
      limit: 4
    ) {
      id
      status
      comm_link_titel
      comm_link_banner {
        id
      }
      date_created
      comm_link_author {
        member_titel
      }
      comm_link
      comm_link_beschreibung
      comm_link_channel {
        channel
        beschreibung
      }
      date_created
    }
    partner(filter: { status: { _eq: "published" } }) {
      id
      partner_name
      partner_logo {
        id
      }
      partner_website
      date_created
    }
  }
`

// MEMBER QUERYS
export const GET_MEMBERS = gql`
  query GetMembers {
    member(
      filter: { status: { _eq: "published" } }
      sort: ["sort", "member_name"]
    ) {
      id
      status
      member_name
      member_titel
      member_rollen
      member_potrait {
        id
      }
    }
  }
`

export const GET_MEMBER = gql`
  query GetMember($name: String!) {
    member(
      filter: { member_name: { _eq: $name } }
      sort: ["sort", "member_name"]
    ) {
      id
      status
      member_name
      member_titel
      member_potrait {
        id
      }
      member_biografie
      member_steckbrief
    }
  }
`

// GAMEPLAY QUERYS
export const GET_GAMEPLAYS = gql`
  query GetGameplays {
    gameplays(filter: { status: { _eq: "published" } }, sort: ["sort", "id"]) {
      id
      status
      gameplay_name
      gameplay_logo {
        id
      }
      gameplay_bild_links {
        id
      }
      gameplay_bild_rechts {
        id
      }
      gameplay_text
    }
  }
`

// COMM-LINK QUERYS
export const GET_COMM_LINKS = gql`
  query GetCommLinks($queryChannel: String!, $squery: String = "") {
    comm_links(
      #filter: { comm_link_channel: { channel: { _contains: $queryChannel} } }
      filter: {
        comm_link_channel: { channel: { _contains: $queryChannel } }
        #_or: [
        #  { comm_link_author: { member_name: { _contains: $searchQuery } } }
        #  { comm_link_author: { member_titel: { _contains: $searchQuery } } }
        #  { comm_link_beschreibung: { _contains: $searchQuery } }
        #  { comm_link_titel: { _contains: $searchQuery } }
        #  { comm_link_channel: { channel: { _contains: $searchQuery } } }
        #  { comm_link: { _contains: $searchQuery } }
        #]
      }
      search: $squery
      sort: ["sort", "-date_created"]
    ) {
      id
      status
      comm_link_titel
      comm_link_banner {
        id
      }
      comm_link_author {
        member_titel
      }
      comm_link
      comm_link_beschreibung
      comm_link_channel {
        id
        channel
        beschreibung
        unavailable
      }
      date_created
    }
  }
`

export const GET_COMM_LINK = gql`
  query GetCommLink($Id: Float!) {
    comm_links(filter: { id: { _eq: $Id } }) {
      id
      status
      comm_link_titel
      comm_link_banner {
        id
        height
        width
      }
      comm_link_author {
        member_titel
        member_potrait {
          id
        }
      }
      comm_link
      comm_link_beschreibung
      comm_link_channel {
        channel
        beschreibung
      }
      date_created
    }
  }
`

// CREDITS QUERYS
export const GET_CREDITS = gql`
  query GetCredits {
    credits {
      id
      status
      credits
    }
  }
`

// VERSEEXKURS QUERYS
export const GET_VEXKURS_INDEX = gql`
  query GetVerseExkursIndex {
    exkurs_index {
      text
    }
  }
`

export const GET_VERSEEXKURS_TIMELINE = gql`
  query GetVerseExkursTimeline {
    geschichte(
      filter: {
        status: { _eq: "published" }
        geschichte_titel: { _eq: "Timeline" }
      }
    ) {
      id
      geschichte_titel
      geschichte_beitrag
    }
  }
`

export const GET_VERSEEXKURS_ONEDAYINHISTORY_KATEGORIES = gql`
  query GetVerseExkursOneDayInHistoryKategories {
    geschichte(
      filter: {
        status: { _eq: "published" }
        geschichte_kategorie: { _eq: true }
      }
    ) {
      id
      geschichte_titel
      geschichte_auswahlbild {
        id
        width
        height
      }
      geschichte_datum
      geschichte_kategorie
      geschichte_beschreibung
    }
  }
`

export const GET_VERSEEXKURS_ONEDAYINHISTORY_ARTICLE = gql`
  query GetVerseExkursOneDayInHistoryArticle($title: String!) {
    geschichte(
      filter: {
        status: { _eq: "published" }
        geschichte_titel: { _eq: $title }
      }
    ) {
      id
      geschichte_titel
      geschichte_auswahlbild {
        id
        width
        height
      }
      geschichte_datum
      geschichte_kategorie
      geschichte_beschreibung
      geschichte_beitrag
    }
  }
`

export const GET_VERSEEXKURS_UEE = gql`
  query GetVerseExkursUEE {
    united_empire_of_earth {
      id
      title
      image {
        id
        width
        height
      }
      text
      sections
    }
  }
`

export const GET_VERSEEXKURS_SYSTEME = gql`
  query GetVerseExkursSysteme {
    systeme(
      filter: { status: { _eq: "published" }, system_boolean: { _eq: true } }
    ) {
      id
      status
      system_name
      system_banner {
        id
        width
        height
      }
      system_text
    }
  }
`

export const GET_VERSEEXKURS_SYSTEM = gql`
  query GetVerseExkursSystem($System: String!) {
    systeme(
      filter: { status: { _eq: "published" }, system_name: { _eq: $System } }
    ) {
      id
      status
      system_name
      system_banner {
        id
        width
        height
      }
      system_text
    }
  }
`

export const GET_VERSEEXKURS_ALIENRASSEN = gql`
  query GetVerseExkursAlienrassen {
    alienrassen(filter: { status: { _eq: published } }) {
      id
      alienrassen_name
      alienrassen_banner {
        id
        width
        height
      }
      text
      sections
    }
  }
`

export const GET_VERSEEXKURS_ALIENRASSE = gql`
  query GetVerseExkursAlienrasse($alienrasse: String!) {
    alienrassen(filter: { alienrassen_name: { _eq: $alienrasse } }) {
      id
      alienrassen_name
      alienrassen_banner {
        id
        width
        height
      }
      text
      sections
    }
  }
`

export const GET_VERSEEXKURS_BIESTARIUM = gql`
  query GetVerseExkursBiestarium {
    alienrassen(filter: { alienrassen_name: { _eq: "Biestarium" } }) {
      id
      alienrassen_name
      alienrassen_banner {
        id
        width
        height
      }
      text
      sections
    }
  }
`

export const GET_VERSEEXKURS_PFLANZEN = gql`
  query GetVerseExkursPflanzen {
    alienrassen(filter: { alienrassen_name: { _eq: "Pflanzen" } }) {
      id
      alienrassen_name
      alienrassen_banner {
        id
        width
        height
      }
      text
      sections
    }
  }
`

export const GET_VERSEEXKURS_FIRMEN = gql`
  query GetVerseExkursFirmen {
    firmen(filter: { status: { _eq: "published" } }) {
      id
      status
      firmen_trans_logo {
        id
        width
        height
      }
      firmen_banner {
        id
        width
        height
      }
      firmen_name
      firmenkategorie
      firmenherstellerkategorie
      firmen_text
    }
  }
`

export const GET_VERSEEXKURS_FIRMA = gql`
  query GetVerseExkursFirma($firma: String!) {
    firmen(
      filter: { status: { _eq: "published" }, firmen_name: { _eq: $firma } }
    ) {
      id
      status
      firmen_trans_logo {
        id
        width
        height
      }
      firmen_banner {
        id
        width
        height
      }
      firmen_name
      firmenkategorie
      firmenherstellerkategorie
      firmen_text
    }
  }
`

export const GET_VERSEEXKURS_FIRMEN_HERSTELLER = gql`
  query GetVerseExkursFirmenHersteller {
    firmen(
      filter: {
        status: { _eq: "published" }
        firmenkategorie: { _eq: "hersteller" }
      }
    ) {
      id
      status
      firmen_trans_logo {
        id
        width
        height
      }
      firmen_banner {
        id
        width
        height
      }
      firmen_name
      firmenkategorie
      firmenherstellerkategorie
      firmen_text
    }
  }
`

export const GET_VERSEEXKURS_FIRMEN_DIENSTLEISTER = gql`
  query GetVerseExkursFirmenDienstleister {
    firmen(
      filter: {
        status: { _eq: "published" }
        firmenkategorie: { _eq: "dienstleister" }
      }
    ) {
      id
      status
      firmen_trans_logo {
        id
        width
        height
      }
      firmen_banner {
        id
        width
        height
      }
      firmen_name
      firmenkategorie
      firmenherstellerkategorie
      firmen_text
    }
  }
`

export const GET_VERSEEXKURS_FIRMEN_SHOPS = gql`
  query GetVerseExkursFirmenShops {
    firmen(
      filter: {
        status: { _eq: "published" }
        firmenkategorie: { _eq: "geschäfte" }
      }
    ) {
      id
      status
      firmen_trans_logo {
        id
        width
        height
      }
      firmen_banner {
        id
        width
        height
      }
      firmen_name
      firmenkategorie
      firmenherstellerkategorie
      firmen_text
    }
  }
`

export const GET_VERSEEXKURS_FIRMEN_ORGANISATIONS = gql`
  query GetVerseExkursFirmenOrganisations {
    firmen(
      filter: {
        status: { _eq: "published" }
        firmenkategorie: { _eq: "organisation" }
      }
    ) {
      id
      status
      firmen_trans_logo {
        id
        width
        height
      }
      firmen_banner {
        id
        width
        height
      }
      firmen_name
      firmenkategorie
      firmenherstellerkategorie
      firmen_text
    }
  }
`

export const GET_VERSEEXKURS_FIRMEN_OTHER = gql`
  query GetVerseExkursFirmenOther {
    firmen(
      filter: {
        status: { _eq: "published" }
        firmenkategorie: { _eq: "verschiedenes" }
      }
    ) {
      id
      status
      firmen_trans_logo {
        id
        width
        height
      }
      firmen_banner {
        id
        width
        height
      }
      firmen_name
      firmenkategorie
      firmenherstellerkategorie
      firmen_text
    }
  }
`

export const GET_VERSEEXKURS_TECHNOLOGIES = gql`
  query GetVerseExkursTechnologies {
    technologien(filter: { status: { _eq: "published" } }) {
      id
      category
      technologie_banner {
        id
        width
        height
      }
      technologie_name
      technologie_beschreibung
    }
  }
`

export const GET_VERSEEXKURS_TECHNOLOGIE = gql`
  query GetVerseExkursTechnologie($Technologie: String!) {
    technologien(filter: { technologie_name: { _eq: $Technologie } }) {
      id
      category
      technologie_banner {
        id
        width
        height
      }
      technologie_name
      technologie_text
    }
  }
`

export const GET_VERSEEXKURS_SPECTRUM_ARTICLES = gql`
  query GetVerseExkursSpectrumArticles {
    spectrum(
      filter: { status: { _eq: "published" } }
      sort: ["sort", "-spectrum_kategorie_beschreibung", "spectrum_titel"]
      limit: 50
    ) {
      id
      status
      spectrum_titel
      spectrum_text
      spectrum_beitrag_kateogrie
      spectrum_kategorie_beschreibung
      image {
        id
        width
        height
      }
    }
  }
`

export const GET_VERSEEXKURS_SPECTRUM_CATEGORY = gql`
  query Spectrum {
    spectrum(filter: { status: { _eq: "published" } }, limit: 1000) {
      id
      status
      spectrum_titel
      spectrum_text
      spectrum_beitrag_kateogrie
      spectrum_kategorie_beschreibung
      image {
        id
        width
        height
      }
    }
  }
`

export const GET_VERSEEXKURS_LITERATUREN = gql`
  query GetVerseExkursLiteraturen {
    literatur_reihen(
      filter: { status: { _eq: "published" } }
      sort: ["sort", "reihen_titel"]
    ) {
      id
      status
      reihen_titel
      reihen_cover {
        id
        width
        height
      }
      reihen_author
      reihen_protagonist
      literatur_reihen_single_kapitel_bool
      text
    }
  }
`

export const GET_VERSEEXKURS_LITERATUR_REIHE = gql`
  query GetVerseExkursLiteraturReihe {
    literatur(
      filter: { status: { _eq: "published" } }
      sort: ["sort", "literatur_kapitel"]
      limit: 1000
    ) {
      id
      status
      literatur_reihe {
        id
        reihen_cover {
          id
          width
          height
        }
        reihen_titel
        literatur_reihen_single_kapitel_bool
        text
      }
      literatur_kapitel
    }
  }
`
export const GET_VERSEEXKURS_LITERATUR_REIHEN = gql`
  query GetVerseExkursLiteraturReihen {
    literatur_reihen(filter: { status: { _eq: "published" } }, limit: 400) {
      id
      status
      reihen_cover {
        id
        width
        height
      }
      reihen_titel
      literatur_reihen_single_kapitel_bool
      text
      literatur(sort: ["sort", "literatur_kapitel"]) {
        id
        literatur_kapitel
      }
    }
  }
`

export const GET_VERSEEXKURS_LITERATUR_ARTICLE = gql`
  query GetVerseExkursLiteraturArticle($Id: Float!) {
    literatur(
      filter: { status: { _eq: "published" }, literatur_kapitel: { _eq: $Id } }
      sort: ["sort", "literatur_kapitel"]
    ) {
      id
      status
      literatur_reihe {
        id
        reihen_cover {
          id
          width
          height
        }
        reihen_titel
      }
      literatur_kapitel
      literatur_text
    }
  }
`

// SHIPEXKURS QUERYS
