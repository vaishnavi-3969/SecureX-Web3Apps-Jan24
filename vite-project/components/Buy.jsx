import { ethers } from "ethers";

const Buy = ({ state }) => {

    const buyChai = async (e) => {
        e.preventDefault();
        const { contract } = state;
        const name = document.querySelector('#name').value;
        const message = document.querySelector('#message').value;
        // const amount = document.querySelector('#amount').value;
        const value = document.querySelector('#amount').value;
        const amount = { value: ethers.utils.parseEther(value) };
        const transaction = await contract.buyChai(name, message, amount);
        await transaction.wait();
        console.log(name, message)
        alert("Transaction successful")
        window.location.reload();
    }
    return (
        <form onSubmit={buyChai} className="p-10">
            <fieldset>
                <label htmlFor="name">
                    <input
                        id="name"
                        type="text"
                        placeholder="Your name"
                    />
                </label>
            </fieldset>
            <fieldset>
                <label htmlFor="message">
                    <input
                        id="message"
                        type="text"
                        placeholder="Your message"
                    />
                </label>
            </fieldset>
            <fieldset>
                <label htmlFor="amount">
                    <input
                        id="amount"
                        type="text"
                        placeholder="Enter Amount"
                    />
                </label>
            </fieldset>
            <button className="btn btn-primary" >Pay</button>
        </form>
    )
}

export default Buy