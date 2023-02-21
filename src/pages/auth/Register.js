import {useState} from "react"
import styles from "./auth.module.scss";
import Card from "../../components/card/Card";
import {Link, useNavigate} from "react-router-dom";
import Loader from "../../components/loader/Loader";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast, } from "react-toastify";


const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const registerUser = (e) => {
        e.preventDefault();
        if (password !== cPassword) {
            toast.error("Passwords don't match.");
        }
        setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          toast.success("Registration Successful...");
          setIsLoading(false);
          navigate("/login");
        })
        .catch((error) => {
          toast.error(error.message);
          setIsLoading(false);
        });

    };

  return (
  <>
  {isLoading && <Loader />}
  <section className={`container ${styles.auth}`}>
  <Card>
  <div className={styles.form}>
              <h2>Register</h2>
              
              <form onSubmit={registerUser}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
              <button type="submit" className="--btn --btn-primary --btn-block ">Register</button>
             
              </form>
              
               <span className={styles.register}>
                <p>Already have account?</p>
                <Link to="/login"> Log In</Link>
              </span>
            </div>
            </Card>
    </section>
    </>
  )
}

export default Register