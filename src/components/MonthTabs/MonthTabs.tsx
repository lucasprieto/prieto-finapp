import styled from '@emotion/styled';
import MonthTabsButton from './TabButton';

const MONTHS = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
];

const TabsGrid = styled('div')({
    marginTop: 10,
    display: 'grid',
    gridTemplateColumns: 'minmax(140px, 1fr) 6fr',
    minHeight: 600,
    height: '85vh',
    overflow: 'hidden',
    borderRadius: 5,
    boxShadow:
        '0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);',
});

const MonthPanel = styled('div')({
    height: '100%',
    overflowY: 'auto',
    paddingLeft: 20,
    paddingRight: 20,
});

const MonthsColumn = styled('div')({
    display: 'grid',
    gridTemplateRows: 'repeat(12, minmax(50px, 1fr))',
    borderRight: '1px solid rgba(0,0,0,.2)',
});

export interface TabsProps {
    path: string;
    year: number;
    month: number;
    children: React.ReactNode;
}

const MonthTabs: React.FC<TabsProps> = ({ path, year, month, children }) => {
    return (
        <TabsGrid>
            <MonthsColumn>
                {MONTHS.map((m, ix) => (
                    <MonthTabsButton
                        href={`${path}/${year}/${ix + 1}`}
                        active={month === ix + 1}
                        key={m}
                    >
                        {m}
                    </MonthTabsButton>
                ))}
            </MonthsColumn>
            <MonthPanel>{children}</MonthPanel>
        </TabsGrid>
    );
};

export default MonthTabs;
