export default function Storages() {
    return (
        <div>
            <div className="p-6 text-align-center">
                <h1 className="text-2xl font-semibold mb-4">Gerenciar Estoques</h1>
            </div>

            <div className="grid grid-cols-5 grid-rows-5 gap-4">
                <div className="col-span-2 row-span-2">ESTOQUE LIXO</div>
                <div className="col-span-2 row-span-2 col-start-4">7</div>
                <div className="col-span-2 row-span-2 row-start-3">8</div>
                <div className="col-span-2 row-span-2 col-start-4 row-start-3">9</div>
            </div>
        </div>
    );
}