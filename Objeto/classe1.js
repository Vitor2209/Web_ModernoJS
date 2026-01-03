class Lanamento {
    constructor(nome = 'Genérico', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(ano, mes) {
        this.ano = ano
        this.mes = mes
        this.lanamentos = []
    }   

    addLancamento(...lançamentos) {
        lançamentos.forEach(l => this.lanamentos.push(l))
    }
    sumario() {
        let valorConsolidado = 0    
        this.lanamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }   
}

const salario = new Lanamento('Salário', 45000)
const contaDeLuz = new Lanamento('Conta de Luz', -220)

const ciclo = new CicloFinanceiro(2024, 6)  
ciclo.addLancamento(salario, contaDeLuz)
console.log(ciclo.sumario())
console.log(ciclo.lanamentos)
// Saída esperada:
// 44780
// [ Lanamento { nome: 'Salário', valor: 45000 },
//   Lanamento { nome: 'Conta de Luz', valor: -220 } ]

