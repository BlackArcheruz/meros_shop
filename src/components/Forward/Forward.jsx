import React from 'react'
import './Forward.css'
import singletovar from './singletovar.png'

function Forward () {

    return (
        <div className="container">
            <div className="forward-container">
                <div className="forward-header">
                    <h3>Избранное</h3>
                    <div className="forward-line">
                        <hr/>
                    </div>
                </div>
                <div className="forward-content">
                    <div className="single-forward">
                        <div className="content-img">
                            <div className="img-forward">
                                <img src={singletovar} alt=""/>
                            </div>
                            <div className="overlay-img">
                                <button>
                                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0)">
                                        <path d="M8.10382 5.59082C7.01432 5.59082 6.12891 6.44672 6.12891 7.4999C6.12891 8.55309 7.01432 9.40899 8.10382 9.40899C9.19333 9.40899 10.0787 8.55309 10.0787 7.4999C10.0787 6.44672 9.1933 5.59082 8.10382 5.59082Z" fill="white"/>
                                        <path d="M8.1037 2.72705C4.81215 2.72705 2.00119 4.70612 0.862305 7.49978C2.00119 10.2934 4.81215 12.2725 8.1037 12.2725C11.3985 12.2725 14.2062 10.2934 15.3451 7.49978C14.2062 4.70612 11.3985 2.72705 8.1037 2.72705ZM8.1037 10.6816C6.28677 10.6816 4.81215 9.25612 4.81215 7.49975C4.81215 5.74339 6.28677 4.31795 8.1037 4.31795C9.92063 4.31795 11.3952 5.74342 11.3952 7.49978C11.3952 9.25615 9.92063 10.6816 8.1037 10.6816Z" fill="white"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0">
                                        <rect width="14.4828" height="14" fill="white" transform="translate(0.862305 0.5)"/>
                                        </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            </div>
                            <div className="forward-mark">
                                <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.984 23.8202C5.42475 24.1308 5.95731 24.0332 6.60924 23.5717L13 19.0455L19.3908 23.5717C20.0427 24.0332 20.5844 24.1308 21.016 23.8202C21.4384 23.5096 21.5394 22.9949 21.2823 22.2494L18.7756 14.9897L25.2122 10.5168C25.8642 10.0641 26.1213 9.59376 25.9468 9.09677C25.7815 8.61753 25.304 8.36015 24.4777 8.36903L16.581 8.4134L14.1661 1.12711C13.9182 0.372746 13.5326 0 13 0C12.4674 0 12.0818 0.372746 11.8339 1.12711L9.41897 8.4134L1.52234 8.36903C0.705133 8.36015 0.21848 8.61753 0.0532022 9.09677C-0.121258 9.59376 0.135841 10.0641 0.787772 10.5168L7.22444 14.9897L4.7269 22.2494C4.46062 22.9949 4.56163 23.5096 4.984 23.8202Z" fill="#F5921C"/>
                                </svg>
                            </div>
                        </div>
                        <div className="info-tovar">
                            <p>Dunyo tovarlari</p>
                            <h5>Stiven Xoaking</h5>
                            <h4>200 000 сум</h4>
                            <div className="button-forward">
                                <button className="btn1">В корзину</button>
                                <button className="btn2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5 5H4.16667H17.5" stroke="#7B8794" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M16.75 5.33333C16.75 4.91912 16.4142 4.58333 16 4.58333C15.5858 4.58333 15.25 4.91912 15.25 5.33333H16.75ZM4.75 5.33333C4.75 4.91912 4.41421 4.58333 4 4.58333C3.58579 4.58333 3.25 4.91912 3.25 5.33333H4.75ZM5.91667 4.66667C5.91667 5.08088 6.25245 5.41667 6.66667 5.41667C7.08088 5.41667 7.41667 5.08088 7.41667 4.66667H5.91667ZM12.5833 4.66667C12.5833 5.08088 12.9191 5.41667 13.3333 5.41667C13.7475 5.41667 14.0833 5.08088 14.0833 4.66667H12.5833ZM15.25 5.33333V17H16.75V5.33333H15.25ZM15.25 17C15.25 17.4865 14.8383 17.9167 14.2857 17.9167V19.4167C15.6266 19.4167 16.75 18.3545 16.75 17H15.25ZM14.2857 17.9167H5.71429V19.4167H14.2857V17.9167ZM5.71429 17.9167C5.16167 17.9167 4.75 17.4865 4.75 17H3.25C3.25 18.3545 4.37336 19.4167 5.71429 19.4167V17.9167ZM4.75 17V5.33333H3.25V17H4.75ZM7.41667 4.66667V3.33333H5.91667V4.66667H7.41667ZM7.41667 3.33333C7.41667 3.15869 7.66225 2.75 8.33333 2.75V1.25C7.16347 1.25 5.91667 2.03522 5.91667 3.33333H7.41667ZM8.33333 2.75H11.6667V1.25H8.33333V2.75ZM11.6667 2.75C12.3378 2.75 12.5833 3.15869 12.5833 3.33333H14.0833C14.0833 2.03522 12.8365 1.25 11.6667 1.25V2.75ZM12.5833 3.33333V4.66667H14.0833V3.33333H12.5833Z" fill="#7B8794"/>
                                    <path d="M8.33337 9.16602V14.166" stroke="#7B8794" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M11.6666 9.16602V14.166" stroke="#7B8794" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forward