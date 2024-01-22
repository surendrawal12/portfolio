import profile from '../assets/profile.jpg';
export default function SideNav(){
    return(
        <>
        <div className='side-nav'>
            <div className='top-logo'>
                <div className='logo'>
                    <img src={profile}/>
                </div>
                <h4>SURENDRA</h4>
            </div>
        </div>
        </>
    )
}