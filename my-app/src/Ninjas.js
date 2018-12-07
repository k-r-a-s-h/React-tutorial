import React from 'react';

const Ninjas = ({ninjas,deleteNinja}) =>{
    // const ninjaList =ninjas.map(ninja => {
    //     if(ninja.age>25){
    //         return(
    //             <div className="ninja" key={ninja.id}>
    //             <div>Name: { ninja.name }</div>
    //             <div>Age:{ ninja.age }</div>
    //             <div>Belt:{ ninja.belt }</div>
    //             </div>
    //         )
    //     }
    //     else{
    //         return null;
    //     }
        
    // })
    const ninjaList = ninjas.map(ninja => {
        return ninja.age>25 ? (
            <div className="ninja" key={ninja.id}>
                 <div>Name: { ninja.name }</div>
                 <div>Age:{ ninja.age }</div>
                 <div>Belt:{ ninja.belt }</div>
                 <button onClick={() => {deleteNinja(ninja.id)}}>Delete Ninja</button>
            </div>
        ) :null; 
    })
    return(
        <div className="div-ninjalist">
            {ninjaList}
        </div>  
    )
}

export default Ninjas;