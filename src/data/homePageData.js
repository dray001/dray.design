import aellaLogo from '../images/thumbnailLogos/aellaLogo.svg'
import kongaLogo from '../images/thumbnailLogos/kongaLogo.svg'
import figmaLogo from '../images/thumbnailLogos/figmaLogo.svg'
import objectLogo from '../images/thumbnailLogos/objectLogo.svg'

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
            title: "Projects and Studies",
            docThumbnail: [
                {
                    title: 'Aella Finance App Design process',
                    logoUrl: aellaLogo,
                    newTab: false,
                    link: '/projects/aellaFinanceApp/aellaFinDesignProcess',
                    linkString: 'Read Case Study',
                    description: 'Finance is complex enough. People and Businesses deserve easy, straightforward products that works. Aella makes it super easy for anyone to borrow...'
                },
                {
                    title: 'Scaling and maintancing design systems for ecomerce',
                    logoUrl: kongaLogo,
                    newTab: false,
                    link: '/projects/konga/kongaDesignProcess',
                    linkString: 'Read Design Process',
                    description: `Konga is one of Nigeria's largest online mall. offering products that span various categories including Phones, Computers, Clothing, Shoes, Home Appliances...`
                },
                {
                    title: 'Object-Oriented Design paradigm for building User Interfaces',
                    logoUrl: objectLogo,
                    newTab: true,
                    link: 'https://dareoni.medium.com/object-oriented-design-paradigm-for-building-user-interfaces-ee13aa2f6726',
                    linkString: 'Read Article',
                    description: 'In the digital world, digital objects such as (buttons, headers, footers, input fields, etc.) have similarities with physical things we see regularly...'
                },
                {
                    title: 'Digital Illustrating with Figma',
                    logoUrl: figmaLogo,
                    newTab: true,
                    link: 'https://medium.com/figma-africa/making-illustrations-with-figma-2fb23749907',
                    linkString: 'Read Article',
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

