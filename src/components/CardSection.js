import { Card } from '@uifabric/react-cards';
import { Text, initializeIcons } from '@fluentui/react';
import 'office-ui-fabric-core/dist/css/fabric.css'

const container ={
    display: 'flex',
    justifyContent: 'center',
    margin:'10vh 0'
}

const icon = {
    fontSize: 24,
    padding: 15,
    verticalAlign: 'middle',
    paddingLeft: 0,
    color: '#0078d4'
}

const styles = {
    cardStyles: {
        root: {
            backgroundColor: 'white',
            padding: 20,
            borderTop: '5px solid #0078d4',
            width: '90%',
            maxWidth: '90%',
            margin: 'auto'
        }
    },
    header: {
        root: {
            fontSize: 20,
            fontWeight: 'bold'
        }
    },
    amount:{
        root: {
            fontSize: 26,
            paddingButtom: 20,
            paddingTop: 30
        }
    },
    percentage: {
        root: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#0078d4'
        }
    }
}


const cards = [
    {
        title: 'Current Balance',
        amount: '$21 876',
        icon: 'Money',
        percentage: '2.3'
    },
    {
        title: 'Current Expanses',
        amount: '$100 876',
        icon: 'PaymentCard',
        percentage: '0.3'
    },
    {
        title: 'Current Income',
        amount: '$25 876',
        icon: 'Savings',
        percentage: '1.3'
    },
]
    


const CardsSection = () =>{
    initializeIcons();
    return(
        <div style={container}>
            {cards.map((cards)=> (
                <div className="s-Grid-col ms-sm3 ms-xl3">
                  <Card style={styles.cardStyles.root}>
                      <Card.Section>
                          <Card.Item>
                                <i style={icon} className={`ms-Icon ms-Icon--${cards.icon}`} aria-hidden="true"></i>
                                <Text style={styles.header.root}>{cards.title}</Text>
                          </Card.Item>
                          <Card.Item>
                                <Text style={styles.amount.root}>{cards.amount}</Text>
                          </Card.Item>
                          <Card.Item>
                                <Text style={styles.percentage.root}>{cards.percentage}%</Text>
                          </Card.Item>
                      </Card.Section>
                  </Card>
                </div>
            ))}
        </div>
    )
}

export default CardsSection