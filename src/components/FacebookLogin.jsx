import React,{useState,useEffect} from "react";
import account from '../assets/images/account.png';
import post_img1 from '../assets/images/post_img1.jpg';
import post_profile1 from '../assets/images/post_profile1.png';
import post_img2 from '../assets/images/post_img2.jpg';
import post_profile2 from '../assets/images/post_profile2.png';
import post_img3 from '../assets/images/post_img3.jpg';
import post_img4 from '../assets/images/post_img4.jpg';
import post_profile3 from '../assets/images/post_profile3.png';
import post_profile4 from '../assets/images/post_profile4.png';
import post_profile5 from '../assets/images/post_profile5.png';
import storiies1 from '../assets/images/storiies1.jpg';
import storiies2 from '../assets/images/storiies2.jpg'
import storiies3 from '../assets/images/storiies3.jpg';
import storiies4 from '../assets/images/storiies4.jpg';
import storiies5 from '../assets/images/storiies5.jpg';
function FacebookLogin(){
    
  const initialState=()=>Number(localStorage.getItem('count'))  ||0;
  const [count,setCount]=useState(initialState);
  const increment=()=>{
    setCount(count+1)
  }
  useEffect(()=>{
    localStorage.setItem('count',count);
  },[count])

  const [like,setLike]=useState(0);
  const [likes,setLikes]=useState(0);
  const [likess,setLikess]=useState(0);

    return(
        
        <div className="container-fluid p-0 main_post_container"  > 
        
            {/* post  content */}
            <div className="create_post_container">
                <div className="create_post">
                    <img src={account} className="tooltips" data-toggle="tooltip" data-placement="bottom" title="Account" alt="" />                        
                    <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#createpostmodal"> What's on your mind ?</button>
                </div>
                <hr className="text-secondary" style={{marginBottom:'10px'}}/>
                <div className="activity_container">
                    <button type="button" className="btn"><i className="bi bi-camera-video-fill text-danger"></i> <span className="text-label">Live Video</span></button>
                    <button type="button" className="btn"><i className="bi bi-images text-success"></i><span className="text-label"> Photo/Video</span></button>
                    <button type="button" className="btn"><i className="bi bi-emoji-laughing-fill text-warning"></i> <span className="text-label">Feeling/activity</span></button>
                </div>
            </div>

            {/*end of post  content */}


            {/* The Modal for create post */}        
            <div className="modal fade" id="createpostmodal" tabIndex="-1" aria-labelledby="createpostmodalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content create_postmodal">
                    <div className="modal-header">
                        <h5 className="modal-title" id="createpostmodalLabel"><b>Create post</b></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                        <div className="mb-3 post_profile">
                            <img src={account} alt="" />
                            <span>
                                <h6>Anitha Cherian</h6>
                                <button type="button" className="btn"><i className="bi bi-globe-asia-australia-fill"></i> Public</button>
                            </span>
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" id="messageTextarea" rows="3" placeholder="What on your mind, Anitha?" required></textarea>
                        </div>
                        <div className="mb-3 add_post">
                            <p>Add to your post</p>
                            <div>
                                <i className="bi bi-images"></i>
                                <i className="bi bi-person-fill-down"></i>
                                <i className="bi bi-emoji-laughing-fill"></i>
                                <i className="bi bi-geo-alt-fill"></i>
                                <i className="bi bi-filetype-gif"></i>
                                <i className="bi bi-three-dots"></i>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary post_btn">Post</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div> 
            {/* End of modal for create post */}

            {/* carousel story slider */}
            <div id="carouselExampleControls" class="carousel slide story-wrapper" data-bs-touch="false" data-bs-interval="false">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card-wrapper">
                            <div className="card" >
                                <div className="image-wrapper">
                                    <img src={storiies1} alt="..." className="bottom_img"/>
                                    <img src={post_profile1} alt="" className="above_img"/>
                                    <p className="stori_name">5-Minute Crafts</p>
                                </div>
                                
                            </div>
                            <div className="card" >
                                <div className="image-wrapper">
                                    <img src={storiies2} alt="..." className="bottom_img"/>
                                    <img src={post_profile2} alt="" className="above_img"/>
                                    <p className="stori_name">5-Minute Crafts</p>
                                </div>
                                
                            </div>
                            <div className="card" >
                                <div className="image-wrapper">
                                    <img src={storiies3} alt="..." className="bottom_img"/>
                                    <img src={post_profile3} alt="" className="above_img"/>
                                    <p className="stori_name">5-Minute Crafts</p>
                                </div>
                                
                            </div>
                            <div className="card" >
                                <div className="image-wrapper">
                                    <img src={storiies4} alt="..." className="bottom_img"/>
                                    <img src={post_profile4} alt="" className="above_img"/>
                                    <p className="stori_name">5-Minute Crafts</p>
                                </div>
                            </div>
                            <div className="card large_screen_card" >
                                <div className="image-wrapper">
                                    <img src={storiies5} alt="..." className="bottom_img"/>
                                    <img src={post_profile5} alt="" className="above_img"/>
                                    <p className="stori_name">5-Minute Crafts</p>
                                </div>
                            </div>
                    </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card-wrapper">
                            <div className="card" >
                                <div className="image-wrapper">
                                    <img src={storiies4} alt="..." className="bottom_img"/>
                                    <img src={post_profile2} alt="" className="above_img"/>
                                    <p className="stori_name">5-Minute Crafts</p>
                                </div>
                                
                            </div>
                            <div className="card" >
                                <div className="image-wrapper">
                                    <img src={storiies5} alt="..." className="bottom_img"/>
                                    <img src={post_profile3} alt="" className="above_img"/>
                                    <p className="stori_name">5-Minute Crafts</p>
                                </div>
                                
                            </div>
                            <div className="card" >
                                <div className="image-wrapper">
                                    <img src={storiies1} alt="..." className="bottom_img"/>
                                    <img src={post_profile1} alt="" className="above_img"/>
                                    <p className="stori_name">5-Minute Crafts</p>
                                </div>
                                
                            </div>
                            <div className="card large_screen_card" >
                                <div className="image-wrapper">
                                    <img src={storiies1} alt="..." className="bottom_img"/>
                                    <img src={post_profile1} alt="" className="above_img"/>
                                    <p className="stori_name">5-Minute Crafts</p>
                                </div>
                                
                            </div>
                            <div className="card" >
                                <div className="image-wrapper">
                                    <img src={storiies1} alt="..." className="bottom_img"/>
                                    <img src={post_profile1} alt="" className="above_img"/>
                                    <p className="stori_name">5-Minute Crafts</p>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card-wrapper">
                            <div className="card" >
                                <div className="image-wrapper">
                                    <img src={storiies1} alt="..." className="bottom_img"/>
                                    <img src={post_profile1} alt="" className="above_img"/>
                                    <p className="stori_name">5-Minute Crafts</p>
                                </div>
                                
                            </div>
                            <div className="card" >
                                <div className="image-wrapper">
                                    <img src={storiies2} alt="..." className="bottom_img"/>
                                    <img src={post_profile2} alt="" className="above_img"/>
                                    <p className="stori_name">5-Minute Crafts</p>
                                </div>
                                
                            </div>
                            <div className="card large_screen_card" >
                                <div className="image-wrapper">
                                    <img src={storiies2} alt="..." className="bottom_img"/>
                                    <img src={post_profile2} alt="" className="above_img"/>
                                    <p className="stori_name">5-Minute Crafts</p>
                                </div>
                                
                            </div>
                            <div className="card" >
                                <div className="image-wrapper">
                                    <img src={storiies2} alt="..." className="bottom_img"/>
                                    <img src={post_profile3} alt="" className="above_img"/>
                                    <p className="stori_name">5-Minute Crafts</p>
                                </div>
                                
                            </div>
                            <div className="card" >
                            <div className="image-wrapper">
                                <img src={storiies3} alt="..." className="bottom_img"/>
                                <img src={post_profile3} alt="" className="above_img"/>
                                <p className="stori_name">5-Minute Crafts</p>
                            </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <div className="icon-wrapper">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <   span className="visually-hidden">Previous</span>
                     </div>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <div className="icon-wrapper">

                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                    </div>
                </button>
            </div>
            {/*end of carousel story slider */}
            

            {/* view post */}
            <div className="alert viewpost_container alert-dismissible fade show" role="alert">
                <div>
                    <div className="post_profile"><img src={post_profile1} alt="" /></div>
                    <div className="post_name"><b>Profile Name </b>
                        <h6>1hr <i className="bi bi-globe-asia-australia-fill"></i></h6>
                    </div>
                    <div className="right_icons">
                            <i class="bi bi-three-dots"></i>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    <div className="post_img"><img src={post_img1} alt="" /></div>
                    <div className="like_comment_count">
                        <div className="like_count">
                            <i className="fa-regular fa-comment"></i> {count}
                        </div>
                        <div className="comment_count">
                            354 comments
                        </div>
                    </div>
                    <div className="like_comment_share">
                        <button onClick={increment} type="button" className="btn"><i className="fa-regular fa-thumbs-up"></i> Like</button>
                        <button type="button" className="btn"><i className="fa-regular fa-comment"></i> Comment</button>
                        <button type="button" className="btn"><i class="fa-solid fa-share"></i> Share</button>

                    </div>

                
                </div>
            </div>

            <div className="alert viewpost_container alert-dismissible fade show" role="alert">
                <div>
                    <div className="post_profile"><img src={post_profile2} alt="" /></div>
                    <div className="post_name"><b>SnapChat </b>
                        <h6>1hr <i className="bi bi-globe-asia-australia-fill"></i></h6>
                    </div>
                    <div className="right_icons">
                            <i class="bi bi-three-dots"></i>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    <div className="post_img"><img src={post_img2} alt="" /></div>
                    <div className="like_comment_count">
                        <div className="like_count">
                            <i className="fa-regular fa-comment"></i> {like}
                        </div>
                        <div className="comment_count">
                            354 comments
                        </div>
                    </div>
                    <div className="like_comment_share">
                        <button onClick={()=>setLike(like+1)} type="button" className="btn"><i className="fa-regular fa-thumbs-up"></i> Like</button>
                        <button type="button" className="btn"><i className="fa-regular fa-comment"></i> Comment</button>
                        <button type="button" className="btn"><i class="fa-solid fa-share"></i> Share</button>

                    </div>

                
                </div>
            </div>

            <div className="alert viewpost_container alert-dismissible fade show" role="alert">
                <div>
                    <div className="post_profile"><img src={post_profile3} alt="" /></div>
                    <div className="post_name"><b>INature </b>
                        <h6>8 November at 17.01 <i className="bi bi-globe-asia-australia-fill"></i></h6>
                    </div>
                    <div className="right_icons">
                            <i class="bi bi-three-dots"></i>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <p>The fastest movers in the animal Kingdom.</p>

                    <div className="post_img"><img src={post_img3} alt="" /></div>
                    <div className="like_comment_count">
                        <div className="like_count">
                            <i className="fa-regular fa-comment"></i> {likes}
                        </div>
                        <div className="comment_count">
                            354 comments
                        </div>
                    </div>
                    <div className="like_comment_share">
                        <button type="button" onClick={()=>setLikes(likes+1)} className="btn"><i className="fa-regular fa-thumbs-up"></i> Like</button>
                        <button type="button" className="btn"><i className="fa-regular fa-comment"></i> Comment</button>
                        <button type="button" className="btn"><i class="fa-solid fa-share"></i> Share</button>

                    </div>

                
                </div>
            </div>

            <div className="alert viewpost_container alert-dismissible fade show" role="alert">
                <div>
                    <div className="post_profile"><img src={post_profile4} alt="" /></div>
                    <div className="post_name"><b>Saumya Jose </b>
                        <h6>8 November at 17.01 <i className="bi bi-globe-asia-australia-fill"></i></h6>
                    </div>
                    <div className="right_icons">
                            <i class="bi bi-three-dots"></i>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <p>സൗദി മരുഭൂമിയിലെ സോളാർ ലൈറ്റ് ബീക്കണുകൾ (Solar Laser Beacons) സൗദി അറേബ്യയുടെ വിശാലമായ മരുഭൂമിയിൽ, പ്രത്യേകിച്ച് നഫൂദ് മരുഭൂമി പോലുള്ള സ്ഥലങ്ങളിൽ വഴിതെറ്റിപ്പോകുന്ന സഞ്ചാരികളെ സഹായിക്കാൻ വേണ്ടി സ്ഥാപിച്ച ലൈറ്റുകളാണ് ഇവ</p>

                    <div className="post_img"><img src={post_img4} alt="" /></div>
                    <div className="like_comment_count">
                        <div className="like_count">
                            <i className="fa-regular fa-comment"></i> {likess}
                        </div>
                        <div className="comment_count">
                            354 comments
                        </div>
                    </div>
                    <div className="like_comment_share">
                        <button type="button" onClick={()=>setLikess(likess+1)} className="btn"><i className="fa-regular fa-thumbs-up"></i> Like</button>
                        <button type="button" className="btn"><i className="fa-regular fa-comment"></i> Comment</button>
                        <button type="button" className="btn"><i class="fa-solid fa-share"></i> Share</button>

                    </div>

                
                </div>
            </div>
            <div className="alert viewpost_container alert-dismissible fade show" role="alert">
                <div>
                    <div className="post_profile"><img src={post_profile1} alt="" /></div>
                    <div className="post_name"><b>Profile Name </b>
                        <h6>1hr <i className="bi bi-globe-asia-australia-fill"></i></h6>
                    </div>
                    <div className="right_icons">
                            <i class="bi bi-three-dots"></i>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    <div className="post_img"><img src={post_img1} alt="" /></div>
                    <div className="like_comment_count">
                        <div className="like_count">
                            <i className="fa-regular fa-comment"></i> {count}
                        </div>
                        <div className="comment_count">
                            354 comments
                        </div>
                    </div>
                    <div className="like_comment_share">
                        <button onClick={increment} type="button" className="btn"><i className="fa-regular fa-thumbs-up"></i> Like</button>
                        <button type="button" className="btn"><i className="fa-regular fa-comment"></i> Comment</button>
                        <button type="button" className="btn"><i class="fa-solid fa-share"></i> Share</button>

                    </div>

                
                </div>
            </div>

            <div className="alert viewpost_container alert-dismissible fade show" role="alert">
                <div>
                    <div className="post_profile"><img src={post_profile2} alt="" /></div>
                    <div className="post_name"><b>SnapChat </b>
                        <h6>1hr <i className="bi bi-globe-asia-australia-fill"></i></h6>
                    </div>
                    <div className="right_icons">
                            <i class="bi bi-three-dots"></i>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>

                    <div className="post_img"><img src={post_img2} alt="" /></div>
                    <div className="like_comment_count">
                        <div className="like_count">
                            <i className="fa-regular fa-comment"></i> {like}
                        </div>
                        <div className="comment_count">
                            354 comments
                        </div>
                    </div>
                    <div className="like_comment_share">
                        <button onClick={()=>setLike(like+1)} type="button" className="btn"><i className="fa-regular fa-thumbs-up"></i> Like</button>
                        <button type="button" className="btn"><i className="fa-regular fa-comment"></i> Comment</button>
                        <button type="button" className="btn"><i class="fa-solid fa-share"></i> Share</button>

                    </div>

                
                </div>
            </div>

            <div className="alert viewpost_container alert-dismissible fade show" role="alert">
                <div>
                    <div className="post_profile"><img src={post_profile3} alt="" /></div>
                    <div className="post_name"><b>INature </b>
                        <h6>8 November at 17.01 <i className="bi bi-globe-asia-australia-fill"></i></h6>
                    </div>
                    <div className="right_icons">
                            <i class="bi bi-three-dots"></i>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <p>The fastest movers in the animal Kingdom.</p>

                    <div className="post_img"><img src={post_img3} alt="" /></div>
                    <div className="like_comment_count">
                        <div className="like_count">
                            <i className="fa-regular fa-comment"></i> {likes}
                        </div>
                        <div className="comment_count">
                            354 comments
                        </div>
                    </div>
                    <div className="like_comment_share">
                        <button type="button" onClick={()=>setLikes(likes+1)} className="btn"><i className="fa-regular fa-thumbs-up"></i> Like</button>
                        <button type="button" className="btn"><i className="fa-regular fa-comment"></i> Comment</button>
                        <button type="button" className="btn"><i class="fa-solid fa-share"></i> Share</button>

                    </div>

                
                </div>
            </div>

            <div className="alert viewpost_container alert-dismissible fade show" role="alert">
                <div>
                    <div className="post_profile"><img src={post_profile4} alt="" /></div>
                    <div className="post_name"><b>Saumya Jose </b>
                        <h6>8 November at 17.01 <i className="bi bi-globe-asia-australia-fill"></i></h6>
                    </div>
                    <div className="right_icons">
                            <i class="bi bi-three-dots"></i>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    <p>സൗദി മരുഭൂമിയിലെ സോളാർ ലൈറ്റ് ബീക്കണുകൾ (Solar Laser Beacons) സൗദി അറേബ്യയുടെ വിശാലമായ മരുഭൂമിയിൽ, പ്രത്യേകിച്ച് നഫൂദ് മരുഭൂമി പോലുള്ള സ്ഥലങ്ങളിൽ വഴിതെറ്റിപ്പോകുന്ന സഞ്ചാരികളെ സഹായിക്കാൻ വേണ്ടി സ്ഥാപിച്ച ലൈറ്റുകളാണ് ഇവ</p>

                    <div className="post_img"><img src={post_img4} alt="" /></div>
                    <div className="like_comment_count">
                        <div className="like_count">
                            <i className="fa-regular fa-comment"></i> {likess}
                        </div>
                        <div className="comment_count">
                            354 comments
                        </div>
                    </div>
                    <div className="like_comment_share">
                        <button type="button" onClick={()=>setLikess(likess+1)} className="btn"><i className="fa-regular fa-thumbs-up"></i> Like</button>
                        <button type="button" className="btn"><i className="fa-regular fa-comment"></i> Comment</button>
                        <button type="button" className="btn"><i class="fa-solid fa-share"></i> Share</button>

                    </div>

                
                </div>
            </div>
            
            {/* end of view post */}


        </div>
        
    )
};
export default FacebookLogin;