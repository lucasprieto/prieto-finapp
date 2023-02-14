import styled from '@emotion/styled';

const DetailGrid = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1.6fr 1fr',
    gap: 20,
});

export interface DetailLayoutProps {
    children: React.ReactNode;
}
const DetailLayout: React.FC<DetailLayoutProps> = ({ children }) => {
    return <DetailGrid>{children}</DetailGrid>;
};

export default DetailLayout;
