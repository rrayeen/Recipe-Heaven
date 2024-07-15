import Image from "next/image";

export default async function FeedBack() {
  interface Feed {
    imageUrl: string;
    name: string;
    feedback: string;
  }
  const Fake_Data: Feed[] = [
    {
      imageUrl: "https://randomuser.me/api/portraits/men/3.jpg",
      name: "Moncef",
      feedback:
        "Offers a rich array of recipes with clear instructions and appealing visuals. The site is intuitive and easy to navigate. More features like meal planners and dietary filters would enhance the experience. Overall, a wonderful tool for food enthusiasts",
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/men/25.jpg",
      name: "Jamal",
      feedback:
        "Impresses with its wide variety of recipes and detailed steps. The search functionality is excellent, and user reviews help refine choices. Including nutritional information would be beneficial. A fantastic site for culinary exploration",
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/men/59.jpg",
      name: "Ethan",
      feedback:
        "Provides an extensive recipe collection with easy-to-follow instructions and beautiful photos. The site is well-organized and user-friendly, making it simple to find recipes. Adding more video tutorials would be a great enhancement. Overall, a valuable resource for home cooks.",
    },
    {
      imageUrl: "https://randomuser.me/api/portraits/men/55.jpg",
      name: "Mark",
      feedback:
        "Offers a user-friendly experience with a vast collection of diverse recipes. The clear instructions and vibrant photos make cooking easy and enjoyable. User reviews enhance the community feel. However, adding meal planning and shopping list features would improve the site. Overall, a great resource for cooking enthusiasts",
    },
  ];
  return (
    <div className="grid  grid-cols-2 gap-14 p-12">
      {Fake_Data.map((el, i) => (
        <div
          key={i}
          className="grid gap-y-4 grid-cols-[auto_1fr] gap-x-4 items-center"
        >
          <div className="relative h-12 w-12">
            <Image
              src={el.imageUrl}
              className="ovject-cover rounded-full"
              fill
              alt={el.name}
            ></Image>
          </div>
          <p className="font-bold  text-lg">{el.name}</p>
          <p className=" tracking-wide col-span-2">{el.feedback}</p>
        </div>
      ))}
    </div>
  );
}
