import React from 'react';
import './Header.css';
import "antd/dist/antd.css";
import { Carousel } from 'antd';

function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">Always remember that you are absolutely unique. Just like everyone else.</span>
      </div>
        <Carousel autoplay>
          <div>
          <img 
            className='headerImg' 
            src="https://texturegen.com/wp-content/uploads/2018/01/anh-nen-dep-voi-phong-canh-thien-nhien.jpg" 
            alt="img" 
          />
          </div>
          <div>
          <img 
            className='headerImg' 
            src="https://anhdep123.com/wp-content/uploads/2021/01/hinh-nen-thien-nhien-4k.jpg" 
            alt="img" 
          />
          </div>
          <div>
          <img 
            className='headerImg' 
            src="https://pdp.edu.vn/wp-content/uploads/2021/02/hinh-nen-thien-nhien-4k-dep-nhat.jpg" 
            alt="img" 
          />
          </div>
          <div>
          <img 
            className='headerImg' 
            src="https://i.pinimg.com/originals/a4/85/49/a48549837ebe9c2e287aba0e84196c48.jpg" 
            alt="img" 
          />
          </div>
          <div>
          <img 
            className='headerImg' 
            src="https://i.pinimg.com/originals/ce/12/25/ce1225f92e766b3a87113dc69560e88f.jpg" 
            alt="img" 
          />
          </div>
          <div>
          <img 
            className='headerImg' 
            src="https://itvn.blog/wp-content/uploads/2020/07/Phong-c%E1%BA%A3nh-thi%C3%AAn-nhi%C3%AAn-l%C3%A0m-h%C3%ACnh-n%E1%BB%81n-%C4%91%E1%BA%B9p-cho-m%C3%A1y-t%C3%ADnh-scaled.jpg" 
            alt="img" 
          />
          </div>
          <div>
          <img 
            className='headerImg' 
            src="https://msmobile.com.vn/upload_images/images/1485hinh-nen-mua-thu-voi-con-duong-day-la-do.jpg" 
            alt="img" 
          />
          </div>
        </Carousel>
    </div>
  );
}

export default Header;
