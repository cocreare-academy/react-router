import React from "react"

var devs = [
    {name: "Fernando", idade: 18},
    {name: "Bruno", idade: 38},
]

export default function About() {
    return (
      <div>
        Exemplo About
        <br />
        <em> Este é o componente about </em>
        <Devs />
      </div>
    );
}

function Devs() {
    var html = [];

    for (let dev of devs) {
        dev.idade = somaNum(dev.idade);

        html.push(<li><strong>{dev.name}</strong>: {dev.idade}</li>)
    }

    return <ul>{html}</ul>
}

function somaNum(idade) {
    return idade+2;
}