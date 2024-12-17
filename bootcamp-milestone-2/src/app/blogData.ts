// typescript type called Blog
export type Blog = {
    title: string;
    date: string;
    description: string;
    image: string;
    imageAlt: string;
    slug: string;
};

// list of Blogs
const blogs: Blog[] = [
	{
		title: "My first blog",
        date: "10-15-2023",
        description: "This is my first blog to write",
        image: "/images/smiski.jpg",
        imageAlt: "image from home",
        slug: "My first blog",
	},
	{
		title: "My second blog",
        date: "10-15-2023",
        description: "This is my second blog to write :)",
        image: "/images/smiski.jpg",
        imageAlt: "image from home",
        slug: "My second blog",
	},
];

export default blogs