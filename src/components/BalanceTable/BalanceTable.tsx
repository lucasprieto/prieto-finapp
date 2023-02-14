import { Expense } from '@/model';
import { PaymentMethod } from '@/model/expense';
import styled from '@emotion/styled';
import { format } from 'date-fns';

const Table = styled.table({
    width: '100%',
    borderCollapse: 'collapse',
});
const TableHead = styled.thead({
    position: 'sticky',
    top: 0,
    background: 'white',
});
const Header = styled.th({
    fontWeight: 700,
    paddingTop: 15,
    paddingBottom: 10,
});
const TableRow = styled.tr({
    maxHeight: '30px',
    lineHeight: 2,
    ':nth-of-type(odd)': {
        backgroundColor: 'rgba(0,0,0,.05)',
    },
    ':hover': {
        backgroundColor: 'rgba(0,0,0,.1)',
    },
});
const TableFooter = styled.tfoot({
    position: 'sticky',
    bottom: 0,
    background: 'white',
    borderTop: '1px solid rgba(0,0,0,.05)',
});
const Footer = styled.td({
    paddingTop: 10,
    paddingBottom: 15,
    textAlign: 'right',
    fontWeight: 700,
});

export interface BalanceTableProps {
    items: Expense[];
}

const BalanceTable: React.FC<BalanceTableProps> = ({ items }) => {
    return (
        <Table>
            <TableHead>
                <tr>
                    <Header style={{ textAlign: 'left' }}>Fecha</Header>
                    <Header>Categoria</Header>
                    <Header>Tipo</Header>
                    <Header style={{ textAlign: 'right' }}>Valor</Header>
                </tr>
            </TableHead>
            <tbody>
                {items.map((expense) => (
                    <TableRow key={expense._id}>
                        <td>{format(new Date(expense.date), 'd LLL')}</td>
                        <td style={{ textAlign: 'center' }}>Carniceria</td>
                        <td style={{ textAlign: 'center' }}>
                            {
                                PaymentMethod[
                                    expense.paymentMethod as keyof typeof PaymentMethod
                                ]
                            }
                        </td>
                        <td style={{ textAlign: 'right' }}>${expense.value}</td>
                    </TableRow>
                ))}
            </tbody>
            <TableFooter>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Footer>
                        Total ${items.reduce((a, b) => a + b.value, 0)}
                    </Footer>
                </tr>
            </TableFooter>
        </Table>
    );
};

export default BalanceTable;
