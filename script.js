* {
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #10172a, #253b68);
    min-height: 100vh;
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.calculadora {
    width: 100%;
    max-width: 420px;
    background: #ffffff;
    padding: 32px;
    border-radius: 24px;
    box-shadow: 0 20px 50px #00000040;
}

.icone {
    width: 55px;
    height: 55px;
    margin: 0 auto 15px;
    background: #e8edff;
    color: #3158c9;
    border-radius: 16px;
    display: grid;
    place-items: center;
    font-size: 30px;
}

h1 {
    text-align: center;
    color: #17233f;
    margin-bottom: 8px;
}

.subtitulo {
    text-align: center;
    color: #788198;
    margin-bottom: 28px;
}

label {
    display: block;
    margin: 18px 0 8px;
    color: #34415c;
    font-weight: bold;
    font-size: 14px;
}

input {
    width: 100%;
    padding: 14px;
    border: 1px solid #dce2ef;
    border-radius: 12px;
    font-size: 16px;
    outline: none;
    transition: 0.2s;
}

input:focus {
    border-color: #4169e1;
    box-shadow: 0 0 0 3px #4169e122;
}

.operacoes {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 24px;
}

button {
    padding: 14px 8px;
    border: none;
    border-radius: 12px;
    background: #3158c9;
    color: white;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.2s;
}

button:hover {
    background: #203f9e;
    transform: translateY(-2px);
}

button:active {
    transform: scale(0.97);
}

.painel-resultado {
    margin-top: 25px;
    padding: 18px;
    background: #f2f5fc;
    border-radius: 14px;
    text-align: center;
}

.painel-resultado span {
    color: #7b87a1;
    font-size: 11px;
    font-weight: bold;
    letter-spacing: 2px;
}

#resultado {
    color: #203f9e;
    font-size: 18px;
    font-weight: bold;
    overflow-wrap: anywhere;
    margin: 12px 0 0;
        }
