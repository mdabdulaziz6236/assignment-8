
import { Link } from 'react-router';
import appErrorImage from '../assets/App-Error.png'

const AppErrorPage = () => {
    return (
        <div>
            
                <div className='flex flex-col justify-center items-center text-center p-5 lg:p-5'>
                    <img className='' src={appErrorImage} alt="" />
                    <h1 className='lg:text-5xl text-3xl font-bold py-5'>OPPS!! APP NOT FOUND</h1>
                    <p className='font-medium text-xl'>The App you are requesting is not found on our system.  please try another apps</p>
                    <Link to='/'>
                    <button className='btn mt-3 btn-primary'>Go Back</button>
                    </Link>
                </div>
               
        </div>
    );
};

export default AppErrorPage;