import { useEffect } from "react";
import { SignInForm } from "../../components/SignInForm";
import { useNavigate  } from "react-router-dom";
import logo from '../../assets/fitguide-logo.png'

export default function SignIn() {
	const navigate = useNavigate();

  useEffect(() => {
    const storedToken = sessionStorage.getItem('token');

    if (storedToken) {
        navigate('/estudantes');
    } else {
      navigate('/login');
    }
  }, [navigate]);

	return (
		
		<div className="flex min-h-full flex-1 flex-col justify-center py-40 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<img
					alt="Your Company"
					src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
					className="mx-auto h-10 w-auto"
				/>
				<h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
					Entre na sua conta
				</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          		<div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
					<SignInForm />
				</div>
			</div>
		</div>
	)
}