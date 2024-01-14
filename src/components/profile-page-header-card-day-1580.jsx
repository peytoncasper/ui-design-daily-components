import { BeakerIcon } from '@heroicons/react/24/solid'


export default function ProfilePageHeaderCardDay1580() {
    return (
        <>
            <div style={{width:"1051px", height:"418px", background: "#FFFAF2", flexDirection:"row", display:"flex"}}>
                <div style={{display:"flex", flexDirection:"column", flexGrow: "1", padding: "40px 40px 40px 40px"}}>
                    <div style={{width: "100px", height: "100px", borderRadius: "39px", backgroundPosition: "100px 200px", background: "url(profilePicture.png), lightgray -12.783px -24.485px / 194% 242.5% no-repeat"}}>

                    </div>
                    <div style={{color:"#13143C", fontFamily:"Roboto", fontSize:"24px", fontStyle:"normal", fontWeight:"700", lineHeight:"normal"}}>
                        MetaMask
                    </div>
                    <div>
                        @metamask
                    </div>
                    <div>
                        MetaMask brings Ethereum to your web browser
                    </div>
                    <div style={{display:"flex", padding:"16px", justifyContent: "center", alignItems:"center", gap:"10px"}}>
                        <div stlye={{borderRadius:"19px", border:"1px solid #DFDFDF", background: "#FFF"}}>
                            <BeakerIcon className="h-6 w-6 text-blue-500" />
                        </div>
                        <div stlye={{borderRadius:"19px", border:"1px solid #DFDFDF", background: "#FFF"}}>
                            <BeakerIcon className="h-6 w-6 text-blue-500" />
                        </div>
                        <div stlye={{borderRadius:"19px", border:"1px solid #DFDFDF", background: "#FFF"}}>
                            <BeakerIcon className="h-6 w-6 text-blue-500" />
                        </div>
                        <div stlye={{borderRadius:"19px", border:"1px solid #DFDFDF", background: "#FFF"}}>
                            <BeakerIcon className="h-6 w-6 text-blue-500" />
                        </div>
                        Test
                    </div>
                </div>
                <div style={{display:"flex", flexGrow: "1", padding: "40px 40px 40px 40px"}}>test</div>
            </div>
        </>
    )
}