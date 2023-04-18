import './info.css'
import img1 from './images/Img1.png'
import Men from './images/Men.jpg'
function Info (){
    return(
      <div className="photo row">
         <img class="col-6" src={img1} alt="aa" />
         <p class="col-6 pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio a blanditiis debitis ipsa et obcaecati labore est. Distinctio quos earum, animi molestiae quaerat error aliquid assumenda porro veniam quia minus, fuga facilis numquam sed asperiores eos odio provident quam voluptatem esse impedit neque qui? At dolor similique inventore modi  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsum ab hic sunt! Asperiores temporibus quae, dolor optio deleniti nihil corrupti at placeat mollitia magnam, perferendis odit quod voluptates dignissimos!</p>

         <p class="col-6 pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque odio a blanditiis debitis ipsa et obcaecati labore est. Distinctio quos earum, animi molestiae quaerat error aliquid assumenda porro veniam quia minus, fuga facilis numquam sed asperiores eos odio provident quam voluptatem esse impedit neque qui? At dolor similique inventore modi  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsum ab hic sunt! Asperiores temporibus quae, dolor optio deleniti nihil corrupti at placeat mollitia magnam, perferendis odit quod voluptates dignissimos!</p>

         <img class="col-6 pb-2" src={Men} alt="aa" />
      </div>
      
    );

}
export default Info;