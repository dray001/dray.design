import aellaImg from '../images/thumbnailImages/Aella.png'
import visualLangDS_Img from '../images/thumbnailImages/aellaVisualLanguage.gif'
import figmaImg from '../images/thumbnailImages/Illustration.png'
import kongaImg from '../images/thumbnailImages/Konga.png'
import objectImg from '../images/thumbnailImages/OOD.png'

export const homePageData = {
homeData: [
        {
            id: "Intro",
            title: "I'm Dare Oni",
            image: "",
            para: 
            `<div>
                <p>
                I'm a digital product designer based in Lagos, Nigeria with experience in architecting effective design systems for scalable robust products 
                I believe Empathy should be the driving force for solving day-to-day problems humanity faces, currently learning Augmented Reality and its various applications.
                </p>         
            </div>`
        },

        {
            id: "portfolio_file",
            title: "Selected works 🧑🏾‍💻",
            docThumbnailProjects: [
                {
                    title: 'Design System for Visual Branding',
                    imgUrl: visualLangDS_Img,
                    newTab: false,
                    live: true,
                    link: '/projects/aellaVisualDS/aellaVisualDS',
                    tags: 'Design Systems, Visual language, Branding',
                    description: 'Design system for visual branding increases consistency across digital assets used for marketing and advertisement...'
                },
                {
                    title: 'Fintech App Design process',
                    imgUrl: aellaImg,
                    newTab: false,
                    live: true,
                    link: '/projects/aellaFinanceApp/aellaFinDesignProcess',
                    tags: 'Fintech, UIDesign, UXDesign',
                    description: 'Finance is complex enough. People and Businesses deserve easy, straightforward products that works. Aella makes...'
                },
                {
                    title: 'Scaling and maintancing design systems for ecomerce',
                    imgUrl: kongaImg,
                    newTab: false,
                    live: true,
                    link: '/projects/konga/kongaDesignProcess',
                    tags: 'E-commerce, Design system, UIDesign, UXDesign',
                    description: `Konga is one of Nigeria's largest online mall. offering products that span various categories including Phones, Computers, Clothing, Shoes, Home Appliances...`
                }
            ],

            docThumbnailArticles: [
                {
                    title: 'Object-Oriented Design paradigm for building User Interfaces',
                    imgUrl: objectImg,
                    newTab: true,
                    live: true,
                    link: 'https://dareoni.medium.com/object-oriented-design-paradigm-for-building-user-interfaces-ee13aa2f6726',
                    tags: 'Object-Oriented Design, Design Thinking, UIDesign',
                    description: 'In the digital world, digital objects such as (buttons, headers, footers, input fields, etc.) have similarities with physical things we see regularly...'
                },
                {
                    title: 'Digital Illustrating with Figma',
                    imgUrl: figmaImg,
                    newTab: true,
                    live: true,
                    link: 'https://medium.com/figma-africa/making-illustrations-with-figma-2fb23749907',
                    tags: 'Illustration, Figma, Vector Tools',
                    description: 'A lot of designers think Figma is just meant for UI design and prototyping. But Figma is great for making flat illustrations and icons, and this is a great way...'
                }
            ]

        },

        {
            id: "aboutMe",
            title: "About Me",
            image: "",
            para: 
            `<div>
            <p>
                I’m passionate about human-computer interaction, I enjoy researching possible ways to 
                improve the experience users get when interacting with digital devices.
            </p>

            <p>
                Also, I architect Design Systems that are scalable and consistent across organizations.
            </p>

            <p>
                Currently, interested in Augmented Reality. I've been playing mainly with (SparkAR and Nomad Sculpt) experimenting with different applications of AR in the tech space.
            </p>
                    
            </div>`
        },

        {
            id: "skillSet",
            title: "My Skillset",
            image: "",
            para: 
            `<div>
                <p>
                I build scalable and effective Design Systems for organizations. I also have a good knowledge of Front-End Development (HTML, CSS, and JavaScript [React]).
                Sketching, Illustrating, and making Art is how I meditate.
                </p>

            </div>`

        }
    ]
}

