import Button from "./Button"

const Btn_Data = [
    '7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', 'C', '0', '=', '/'
]

const Cacluator = () => {
    return (
        <section className="calc">
            {
                Btn_Data.map((el, i) => {
                    return <Button key={i}>
                        {el}
                    </Button>
                })
            }
        </section>
    )
}

export default Cacluator
