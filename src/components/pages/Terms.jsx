import styled from 'styled-components'

import { Title } from '../layout/Title.style'

const List = styled.ul`
    font-family: inherit;
    font-size: 16px;
    width: 100%;
    margin-top: 24px;
    text-align: justify;

    & ul li{
        list-style: none;
    }

    & h2{
        margin: 20px 0;
    }

    & h3{
        margin: 20px 0;
    }
`

export default function Terms(){
    return(
        <>
            <Title>Termos de uso:</Title>
            
            <List>
                <h2>1. Aceitação dos Termos</h2>
                <p>Ao acessar ou usar o site , você concorda em cumprir e estar legalmente vinculado a estes Termos de Uso. Se você não concorda com estes termos, por favor, não utilize nosso site.</p>

                <h2>2. Alterações nos Termos</h2>
                <p>Reservamo-nos o direito de modificar ou atualizar estes Termos de Uso a qualquer momento. Quaisquer alterações serão publicadas nesta página. Seu uso continuado do site após a publicação de alterações constitui sua aceitação dos novos Termos de Uso.</p>

                <h2>3. Compras</h2>
                <h3>3.1. Métodos de Pagamento</h3>
                <ul>
                    <li><strong>Pagamento via Pix:</strong> O usuário é responsável por enviar o comprovante de pagamento corretamente para que a transação seja validada. nós não nos responsabilizamos por compras que não sejam confirmadas devido ao não envio ou envio incorreto do comprovante.</li>
                    <li><strong>Pagamento em Dinheiro:</strong> Este método de pagamento é realizado no ato da entrega do produto. O cliente deve pagar o valor exato ao entregador no momento da entrega.</li>
                </ul>

                <h2>4. Envio de Comprovantes de Pagamento via Pix</h2>
                <h3>4.1. Responsabilidade do Usuário</h3>
                <p>É de total responsabilidade do usuário garantir que o comprovante de pagamento via Pix seja enviado corretamente para a plataforma. Recomendamos que o usuário verifique se todas as informações estão corretas antes de enviar o comprovante.</p>

                <h3>4.2. Não Envio de Comprovante</h3>
                <p>Nós não nos responsabilizamos por qualquer inconveniente ou problema decorrente do não envio do comprovante de pagamento via Pix. Sem o comprovante, a compra não será validada e o pedido não será processado.</p>

                <h2>5. Entrega e Pagamento em Dinheiro</h2>
                <h3>5.1. Processo de Entrega</h3>
                <p>Para compras com pagamento em dinheiro, o pagamento deve ser realizado no ato da entrega do produto. É importante que o cliente tenha o valor exato em mãos para facilitar a transação.</p>

                <h3>5.2. Falta de Pagamento</h3>
                <p>Se o pagamento não for efetuado no ato da entrega, o produto não será entregue. O cliente deverá reprogramar a entrega e garantir que o pagamento será realizado na próxima tentativa de entrega.</p>

                <h2>6. Política de Reembolso</h2>
                <p>Para compras realizadas via Pix, uma vez que o pagamento é confirmado e o comprovante é enviado corretamente, o reembolso poderá ocorrer entrando em contato pelo instagram @3inf_iftm</p>
                <p>Para compras pagas em dinheiro, é preciso que o comprador notifique nossa equipe pelo instagram @3inf_iftm para que ocorra o controle dos produtos.</p>

                <h2>7. Limitação de Responsabilidade</h2>
                <p>Nós não seremos responsável por quaisquer danos diretos, indiretos, incidentais, especiais ou consequentes decorrentes do uso ou da incapacidade de usar nossos serviços, incluindo, mas não se limitando a, erros de envio de comprovantes ou problemas no pagamento em dinheiro.</p>

                <h2>8. Contato</h2>
                <p>Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco através do instagram @3inf_iftm.</p>

                <p>Ao utilizar o site, você reconhece que leu, entendeu e concorda em estar vinculado a estes Termos de Uso.</p>
            </List>
        </>
    )
}