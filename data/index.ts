export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Achievements", link: "#achievements" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[85vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development and competitive programming.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building various projects on Next.js and expertising Competitive Programming",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "CodeMonks - Online Coding Platform",
        des: "Developed Online Judge deployed on Vercel, facilitating problem-solving, user management, and code compilation.",
        img: "/codemonks.png",
        iconLists: ["/mongo.svg","/zod.svg","/dock.svg","/ts.svg","/next.svg","/re.svg", "/tail.svg"],
        link: "https://online-judge-eight.vercel.app/",
    },
    {
        id: 2,
        title: "React JS Blog Application",
        des: "Developed a dynamic React Blog App featuring CRUD operations, search functionality and routing using React Router.",
        img: "/p1.png",
        iconLists: ["/re.svg", "/tail.svg"],
        link: "https://github.com/Pratham9497/Learn_React_Project",
    },
    {
        id: 3,
        title: "Real Estate Price Predictor Website",
        des: "Designed a high-performing website using cross-validation and advanced regression models to predict house prices based on location, square footage, and BHK, achieving an exceptional 84% accuracy.",
        img: "/p2.png",
        iconLists: ["/html5.svg", "/css.svg", "/js.svg", "/py.svg"],
        link: "https://github.com/Pratham9497/Real_Estate_Price_Predictor",
    },
    {
        id: 4,
        title: "Todos List",
        des: "Led the development of a feature-rich Todos List website with CRUD functionality using Django framework.",
        img: "/p3.png",
        iconLists: ["/html5.svg", "/bootstrap.svg", "/django.svg"],
        link: "https://github.com/Pratham9497/Todos-List",
    },
];

export const achievements = [
    {
        quote:
            "Secured a prestigious spot in the top 1% of the NPTEL 'Getting Started with Competitive Programming' course, achieving an impressive score of 97%. Awarded the coveted gold medal, demonstrating exceptional proficiency and a deep understanding of competitive programming concepts.",
        name: "NPTEL",
        title: "Achieved Top 1% in NPTEL Getting Started With Competitive Programming Course",
    },
    {
        quote:
            "Attained an outstanding 39th global rank in the highly competitive CodeChef Starters 118 (Div.2) contest. This achievement underscores my strategic problem-solving skills and ability to perform under pressure on a global stage.",
        name: "CodeChef",
        link: "/codechef.svg",
        title: "Got 39th Global Rank in CodeChef Starters 118 (Div.2) Contest",
    },
    {
        quote:
            "Actively participated in numerous coding contests, solving over 1200 problems across leading platforms such as Codeforces, Atcoder, CodeChef, LeetCode, and GFG. This extensive practice showcases my commitment to continuous learning and honing my algorithmic expertise.",
        name: "LeetCode CodeChef Codeforces Atcoder GFG",
        link: "/leetcode.svg",
        title: "Participated in Contests and Solved Over 1200 Problems on Various Coding Platforms",
    },
    {
        quote:
            "Triumphed in the Intramurals 2K24, securing the gold medal in badminton. This achievement highlights my dedication, athletic prowess, and the ability to excel both in intellectual and physical endeavors, balancing a diverse set of skills.",
        name: "National Institute of Technology Patna",
        title: "Won Gold Medal in Intramurals 2K24 in Badminton Sports",
    },
];

export const companies = [
    {
        id: 1,
        name: "LeetCode",
        img: "/leetcode.svg",
        nameImg: "/cloudName.svg",
        link: "https://leetcode.com/u/prathamshalya/",
    },
    {
        id: 2,
        name: "CodeChef",
        img: "/codechef.svg",
        nameImg: "/appName.svg",
        link: "https://www.codechef.com/users/prathamshalya",
    },
    {
        id: 3,
        name: "Codeforces",
        img: "/codeforces.svg",
        nameImg: "/hostName.svg",
        link: "https://codeforces.com/profile/Pratham_Shalya",
    },
    {
        id: 5,
        name: "AtCoder",
        img: "/atcoder.svg",
        nameImg: "/dockerName.svg",
        link: "https://atcoder.jp/users/prathamshalya",
    },
    {
        id: 4,
        name: "geeksforgeeks",
        img: "/gfg.svg",
        nameImg: "/streamName.svg",
        link: "https://www.geeksforgeeks.org/user/prathamsghxd/",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Full Stack Development Intern - EcoWays",
        desc: "Assisted in the development of optimized algorithms for solving real-life problems.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Problem Setting Contributor - CodeChef",
        desc: "Designed and Developed challenging algorithmic problems for competitive programming contests.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp3.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/Pratham9497"
    },
    {
        id: 2,
        img: "/wha.svg",
        link: "+91 8532927264"
    },
    {
        id: 3,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/pratham-shalya-a4801323b/"
    },
    {
        id: 4,
        img: "/dock.svg",
        link: "https://hub.docker.com/u/prathamshalya"
    },
];