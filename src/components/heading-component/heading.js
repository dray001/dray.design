import React from "react"
import './heading.scss'

const Heading = ({title, size}) => {

    // useEffect(()=> {
    //     let titles = document.querySelectorAll('.sectionTitle');
    //     let titleHolders = document.querySelectorAll('.titleHolder');

    //     const observeIntersection = (titleCount) => {
    
    //         const options = {
    //             root: null,
    //             threshold: 1,
    //             rootMargin: "50px"
    //         };
          
    //         const observer = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
        
    //             console.log(observer)
        
    //             if (entry.isIntersecting) {
    //                 console.log('in the view');
    //                 titles[titleCount].classList.add('test');
    //             }

    //           else {
    //             console.log('out of view');
    //             titles[titleCount].classList.remove('test');
    //           }

    //         });
    //         }, options);
        
    //         observer.observe(titleHolders[titleCount]);
    //     }

    //     const titleCollector = () => {
    //        let headingCount = titleHolders.length - 1;
    //        for (let i = 0; i <= headingCount; i++) {
    //             observeIntersection(i);   
    //        }
    //     }
    //     console.log(titleCollector());

 
    // },[]);

    return (
        <div className='titleHolder'>
            <h1 style={{fontSize: `${size}`}} className= 'sectionTitle' >
                {title}
            </h1>
        </div>
    );
}

export default Heading

