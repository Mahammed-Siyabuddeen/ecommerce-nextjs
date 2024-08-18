import { ChangeEvent, FC, FormEvent, useState } from "react"
import CartTotal from "./CartTotal"
import StateList from "./StateList"
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/features/redux/store";
import { setAddress } from "@/features/addressSlice";
import { useRouter } from "next/navigation";
import { setCurrentComponent } from "@/features/checkoutSlice";

const AddressComponent: FC = () => {
    const [name, setName] = useState<string>("");
    const [street, setStreet] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [state, setState] = useState<string>("AP");
    const [zipcode, setZipcode] = useState<string>("");
    const [country, setCountry] = useState<string>("india");
    const [phone, setPhone] = useState<string>("");
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();


    const handlecheckout = (e: FormEvent) => {
        e.preventDefault();
        dispatch(setAddress({ name, street, city, state, zipcode, country, phone }));
        dispatch(setCurrentComponent('summary'))
    }
    return (
        <form onSubmit={(e: FormEvent) => handlecheckout(e)} className="container mx-auto">
            <h1 className="text-center font-bold text-xl my-5">Check out</h1>
            <div className="flex mx-auto w-4/5 justify-between">
                <div className=" flex flex-col m-3 mr-6   w-3/5">
                    <div className="flex flex-col gap-1 my-2">
                        <label htmlFor="">name</label>
                        <input required value={name} onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)} type="text" name='name' className="w-full p-3 border outline-none " />
                    </div>
                    <div className="flex flex-col gap-1 my-2">
                        <label htmlFor="">street</label>
                        <input required value={street} onChange={(e: ChangeEvent<HTMLInputElement>) => setStreet(e.target.value)} type="text" name='street' className="w-full p-3 border outline-none " />
                    </div>
                    <div className="flex flex-col gap-1 my-2">
                        <label htmlFor="">city</label>
                        <input required value={city} onChange={(e: ChangeEvent<HTMLInputElement>) => setCity(e.target.value)} type="text" name="city" className="w-full p-3 border outline-none " />
                    </div>
                    <div className="flex flex-col gap-1 my-2">
                        <label htmlFor="">state</label>
                        <StateList state={state} setState={setState} />
                    </div>
                    <div className="flex flex-col gap-1 my-2">
                        <label htmlFor="">country</label>
                        <input required value={country} type="text" name='country' className="w-full p-3 border outline-none " />
                    </div>
                    <div className="flex flex-col gap-1 my-2">
                        <label htmlFor="">Zipcode</label>
                        <input required value={zipcode} onChange={(e: ChangeEvent<HTMLInputElement>) => setZipcode(e.target.value)} type="tel" name='Zipcode' className="w-full p-3 border outline-none " />
                    </div>
                    <div className="flex flex-col gap-1 my-2">
                        <label htmlFor="">Phone</label>
                        <input required value={phone} onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)} type="tel" name='phone' className="w-full p-3 border outline-none " />
                    </div>
                </div>
                <div className="w-2/5  ">
                    <CartTotal />
                </div>
            </div>
        </form>
    )

}

export default AddressComponent