

export interface I_Img{

    img_Title     : string ;  // 圖片標題
    img_Subtitle? : string ;  // 圖片副標題
    img_Alt?      : string ;
    img_Url       : string ; 

}

// -----------------------



// 可左右滾動圖片卡
export interface I_Scroll_Card extends I_Img {

    // 以下是為了配合教學 API 回傳的屬性( 之後自己做的 API 再刪掉 )
    img   : string ;
    title : string ;

}

// 小圖卡
export interface I_Small_Card extends I_Img {

    // 以下是為了配合教學 API 回傳的屬性( 之後自己做的 API 再刪掉 )
    img      : string ;
    title    : string ;
    distance : string ;
    location : string ;

}


// Banner ( 左邊文字，右邊圖片 )
export interface I_Banner_Right_Image extends I_Img {

    img_Subtitle : string ;
    
 }