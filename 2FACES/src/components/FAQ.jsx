import React, {useEffect, useState} from 'react'
import Faq from "react-faq-component";

const FAQ = () => {

    const data = {
        title: "FAQ",
        rows: [
            {
                title: "Lorem ipsum dolor sit amet",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat, 
                ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus. In maximus euismod neque, 
                sed elementum metus ultricies vel.`,
            },
            {
                title: "Lorem ipsum dolor sit amet",
                content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat, 
                ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus. In maximus euismod neque, 
                sed elementum metus ultricies vel.`,
            },
    {
        title: "Lorem ipsum dolor sit amet",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat, 
        ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus. In maximus euismod neque, 
        sed elementum metus ultricies vel.`,
    },
    {
        title: "Lorem ipsum dolor sit amet",
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat, 
        ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus. In maximus euismod neque, 
        sed elementum metus ultricies vel.`,
    },
]
    };
    
    const styles = {
        // bgColor: 'white'
        titleTextColor: "black",
        rowTitleColor: "black",
        // rowContentColor: 'grey',
        arrowColor: "black",
    };



  return (
    <div>
        <Faq
            data = {data}
            styles = {styles}
        />
      
    </div>
  )
}

export default FAQ
