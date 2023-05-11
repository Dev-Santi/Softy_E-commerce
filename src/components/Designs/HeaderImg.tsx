import headerImg from "../../assets/header.png";

const HeaderImg = () => {
  return (
    <div className='header_img'>
      <div className='h_card'>
        <div>
          <img src={headerImg} alt='A girl doing care on her skin' />
        </div>
      </div>
    </div>
  );
};

export default HeaderImg;
