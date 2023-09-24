import { useState} from 'react';
import Cards from './Cards';
import AddCard from './AddCard';



export default function Home() {
    const [data, setData] = useState(null);
    
    return (
        <>
            <img src="https://plus.unsplash.com/premium_photo-1683749810514-860f96ad0735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2013&q=80" style={{ height: '100vh', width: '100vw' }} alt="background" />
            <div className="container-fluid" style={{ position: 'absolute', top: '0', left: '0', height: '100vh', width: '100vw', backgroundColor: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(3px)' }}>
                <div className="row w-100 h-100 d-flex justify-content-around align-items-center">
                    <div className="col-md-4">
                        <h3 className="display-1 text-white fst-italic">Manage Yourself & Set Goals</h3>
                        < AddCard data={data} setData={setData}/>
                    </div>
                    <div className="col-md-6">
                        {
                            data ?
                            <div style={{overflowY:'scroll', height:'60vh'}}>
                                <Cards data={data} setData={setData} />
                            </div>
                            :
                                <h3 className="display-2 fw-bold text-white"> Start Creating Goals</h3>
                        }
                    </div>

                </div>
            </div>

        </>
    );
}