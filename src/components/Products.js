// products 

import one from '../assets/images/perfume.png'
import two from '../assets/images/perfume_1.png'
import three from '../assets/images/perfume_2.png'



function Products() {

    return (
      <div className="products">
        <div class="box">
          <img src={one}></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ab libero neque obcaecati voluptate. Perspiciatis asperiores animi illum quod consequatur, accusamus maiores omnis facilis culpa ab esse aliquam aut! Corrupti!</p>
  
        </div>
        <div class="box">
          <img src={two}></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ab libero neque obcaecati voluptate. Perspiciatis asperiores animi illum quod consequatur, accusamus maiores omnis facilis culpa ab esse aliquam aut! Corrupti!</p>
  
        </div>
        <div class="box">
          <img src={three}></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam ab libero neque obcaecati voluptate. Perspiciatis asperiores animi illum quod consequatur, accusamus maiores omnis facilis culpa ab esse aliquam aut! Corrupti!</p>
  
        </div>
  
      </div>
    )
  
  
  }

  export default Products



