import {Dialog,DialogContent,makeStyles,Box, Typography,TextField,Button} from '@material-ui/core';
import {useState} from 'react';
import { authenticateSignUp,authenticatelogin } from '../../service/api';

const usestyles=makeStyles({
    container:{
        height:'70vh',
        width:'70vh'

    },
    leftcontainer:{
        backgroundImage:`url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        backgroundRepeat:'no-repeat',
        height:'70vh',
        width:'30vh',
        backgroundColor:"#2874f0",
        backgroundPosition:'bottom',
        

    },
    rightcontainer:{
        marginLeft:20

    },
    logintext:{
        color:"#ffffff",
        
        fontSize:20,
        padding:'100px 80px'
    },
    taglinetext:{
        color:"#ffffff",
        fontSize:14,
        padding:'0px 30px',
        marginTop:10
    },
    loginbtn: {
        textTransform: 'none',
        background: '#FB641B',
        color: '#fff',
        height: 48,
        borderRadius: 2,
        marginTop:20,
        width:300
    },
    requestbtn: {
        textTransform: 'none',
        background: '#fff',
        color: '#2874f0',
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)',
        marginTop:20,
        width:300

    },
    text: {
        marginTop:20,
        color: '#878787',
        fontSize: 12,
        cursor:'pointer'
    },
    textfield:{
        padding:'10px 0px',
        width:300
    }
    

})
const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}
const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};
const logininitialvalues={
    username:'',
    password:''
};



const Login=({openstate,setopen,setaccount})=>{

    const[signup,setsignup]=useState(signupInitialValues);
    const[login,setlogin]=useState(logininitialvalues);
    const onInputChange=(e)=>{
        setsignup({...signup,[e.target.name]:e.target.value});
    }


    const closedialog=()=>{
        setopen(false);
        toggleAccount(accountInitialValues.login);

    }

    const toggleaccountstate=()=>{
        toggleAccount(accountInitialValues.signup);
    }

    const signupUser=async()=>{
      //toggleAccount(accountInitialValues.login);
        setaccount(signup.username);
        closedialog();
        let response=await authenticateSignUp(signup);
        if(!response) return;
    }

    const loginuser=async()=>{
        let response=await authenticatelogin(login);
        
        if(!response){
            console.log('no response from login user');
            return;
        }
        else{
            setaccount(login.username);
            closedialog();
        }

    }
    const onvaluechange=(e)=>{
        setlogin({...login,[e.target.name]:e.target.value});
    }
    const classes=usestyles();
    const [ account, toggleAccount ] = useState(accountInitialValues.login);

    return(
        <Dialog open={openstate} onClose={closedialog}>
            <DialogContent className={classes.container}>
                <Box style={{display:'flex'}}>
                    {account.view==='login'?
                    <Box className={classes.leftcontainer}>
                        <Typography className={classes.logintext}>{account.heading}</Typography>
                        <Typography className={classes.taglinetext}>{account.subHeading}</Typography>

                    </Box>
                    :<Box className={classes.leftcontainer}>
                        <Typography className={classes.logintext}>{account.heading}</Typography>
                        <Typography className={classes.taglinetext}>{account.subHeading}</Typography>

                    </Box>
                
                    }
                    {account.view==='login'?
                    <Box className={classes.rightcontainer}>
                            <TextField name='username' onChange={(e)=>onvaluechange(e)} label='Enter Username' className={classes.textfield} />
                            
                            <TextField name='password' onChange={(e)=>onvaluechange(e)} type='password' label='Enter Password' className={classes.textfield}/>
                            <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <Button className={classes.loginbtn} onClick={loginuser}>Login</Button>
                            <Typography className={classes.text} style={{textAlign:'center'}}>OR</Typography>
                            <Button className={classes.requestbtn}>Request OTP</Button>
                            <Typography className={classes.text} onClick={()=>toggleaccountstate()}>New to Flipkart? Create an account</Typography>
                    </Box>:
                    <Box className={classes.rightcontainer}>
                    <TextField onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' className={classes.textfield}/>
                    <TextField onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' className={classes.textfield} />
                    <TextField onChange={(e) => onInputChange(e)} name='username' label='Enter Username' className={classes.textfield}/>
                    <TextField onChange={(e) => onInputChange(e)} name='email' label='Enter Email' className={classes.textfield}/>
                    <TextField onChange={(e) => onInputChange(e)} name='password' label='Enter Password' className={classes.textfield}/>
                    <TextField onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' className={classes.textfield}/>
                    <Button className={classes.loginbtn} onClick={() => signupUser()} >Sign Up</Button> 
                    </Box>
                          }           


                </Box>


            </DialogContent>
        </Dialog>
        )


}

export default Login;

