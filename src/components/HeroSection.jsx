import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative mb-32 drop-shadow-2xl">
      <div className="absolute top-0 bottom-0 left-0 right-0 z-10 flex items-center justify-center">
      <div className="absolute w-full h-full bg-black opacity-60"></div>
        <div className="relative items-center justify-center">
          <h1 className="flex items-center justify-center text-lg font-bold text-white mt-20 mb-[-40px] sm:mt-10 sm:mb-[-50px] sm:text-2xl md:mt-10 md:mb-[-30px] md:text-4xl lg:mt-0 lg:mb-0 lg:text-5xl xl:mb-10 xl:text-6xl">
            Willkommen
            <span className="ml-2 tracking-widest text-secondary">bei der</span>
          </h1>
          <div className="flex items-center justify-center scale-[.4] sm:scale-50 md:scale-[.6] lg:scale-75 xl:scale-100">
            <Image
              src="https://cms.ariscorp.de/assets/62eb0e48-6a0e-432f-b90d-fbd6aca6eaac"
              alt="ArisCorp Banner"
              width={600}
              height={230}
              priority
            />
          </div>
        </div>
      </div>
      <div className="">
        <video
          autoPlay
          loop
          muted
          controlslist="nofullscreen nodownload"
          className="w-full h-full"
        >
          <source
            src="https://ariscorp-homepage.s3.eu-central-1.amazonaws.com/ArisCorp-Trailer.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGV1LWNlbnRyYWwtMSJHMEUCIHHHuVsh%2B9mmao5ChzyiS1Ytc52ac4oeqX4oE8qxmQXgAiEAq3tolHefGqCrTfTuILHqAjOOyh%2F7924ixi4ap05TtlEq7QIIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARABGgwyMzcxNzI1NjMzODgiDFyDT6VgYwePm77dISrBAoXTFdzvOpjnm63o1Mf9CHVKBCf0jS09xfWdia8IYm7Aeg%2BSIUnoUDN7dJ8HsDoV1q%2Bi1pS%2BvRPqIFe6QsbxnEOnMFgTzSAxyNXeLZeZIaF5vD9a5D1bS1ZE6BR5ml%2BQ6qgF7cC%2Bp9rkCOCkS6hd%2FfrDThDM88nhbsh9TZTwK%2FD4aGGWdgmkSX57VOeYLZ%2BGf5eLvEjbt293AN2LT1%2BJiKy3jecEQhw2K34qLW73RuIcWObZ7I0Z84Vp4Vie7SBHMvS3tOWihpGIVJO8gCd12P41kl1lg8dX3Bm5B215OEmFbHOF%2BO8jfIDd3XahT47L5PRVBf3iq4FEP3%2BY%2BbnWYsfQTxlvflIhSQwOhc3R0Uf7nrnS4beq%2FsAVQ83v4akBbLxMmzPz7fnxBxr1pFL8KVHqWbEJYTinw8a26po9ygcZqTC7lJOPBjqzArrb%2B43M51y%2FiQptp%2B%2Fh8LQ1nv5gWjH2fjKzbXcOA3LPZSkWGudrRTBUhpVv6Z7iMyFvMyN3xyNwCOCpJTWU4QtyFuRf%2FqBxhHX1eg3INfTaibc7X7MOSrh6yIDV4ZqePKflRYIlauKN4yDvC8z5f551WYmZKxseDoZbSBnF%2FeeW3rygQhVtxXpV%2BYqCYgnSf0TUBiK0LB3xhIQv1yL6U6BqOj08LeTa7BU6BCO%2BMx9NURKHjwJvOscEOyOK5iErSg1NfcudxVEdiW8oXbVkboa1cEjBUjEXQzDgcWi7QwhiGURrT0o4LFrsDqu7zFPp6lT1kv3iCG3aAIlQRmJyW4c9liKiu%2FWv%2F7UvexFOt7anbXnAo96avRGxodwS%2B1JZS2HxwzZHgyOfV93yl%2Br2JWekPiw%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220117T022005Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIATOOEWDW6JZ45PDWP%2F20220117%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=c2697256bb2264e924dd08494730eea9654de85d68e2d38e7ee1e93fc5a548d4"
            type='video/mp4'
          />
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
