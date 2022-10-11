import aellaLogo from '../images/thumbnailLogos/aellaLogo.svg'
import kongaLogo from '../images/thumbnailLogos/kongaLogo.svg'
import figmaLogo from '../images/thumbnailLogos/figmaLogo.svg'

export const homePageData = {
homeData: [
        {
            id: "Intro",
            title: "I'm Dare Oni",
            image: "",
            para: 
            `<div>
                <p>
                <div className='ImgMobile' />
                Empathy is the driving force to creating solutions for day to day problems faced by humanity.
                <strong> Lead Designer at Aella </strong>, putting smiles to costumers by providing easy banking experience.
                Empathy is the driving force for creating solutions to day to day problems faced by humanity.
                Currently the <strong> Lead Designer at Aella </strong>, putting smiles to costumers by providing easy banking experience.
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
                    link: '/projects/aellaFinanceApp/aellaFinDesignProcess',
                    linkString: 'Read Article',
                    description: 'Finance is complex enough. People and Businesses deserve easy, straightforward products that works. Aella makes it super easy for anyone to borrow...'
                },
                {
                    title: 'Scaling and maintancing design systems for ecomerce',
                    logoUrl: kongaLogo,
                    link: '/projects/konga/kongaDesignProcess',
                    linkString: 'Read Article',
                    description: `Konga is one of Nigeria's largest online mall. offering products that span various categories including Phones, Computers, Clothing, Shoes, Home Appliances...`
                },
                {
                    title: 'Object Oriented Design Paradigm with Figma',
                    logoUrl: figmaLogo,
                    link: '/projects/aellaFinanceApp/aellaFinDesignProcess',
                    linkString: 'Read Article',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit sed orci et purus amet. Ullamcorper in lectus suspendisse non...'
                },
                {
                    title: 'Digital Illustrating with Figma',
                    logoUrl: figmaLogo,
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
                Took a while for me to realize the only way to fulfillment 
                is to go with my flow (the Tao), this has drastically improved my creativity,
                and how I work with people around me.
            </p>
            
            <p>
                Ever since I spotted the constellation Orion in the night skies, my interest in Astronomy began, it has been a way to reflect inward.
                Design helps me in connecting to the world in ways I can't explain.
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

