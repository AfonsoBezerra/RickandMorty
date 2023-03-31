import requestsApi, { category } from '@services/api/requestApi';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  const responseInfo = await requestsApi.getPageList(category.characterData, 1);
  return {
    props: {
      data: responseInfo.results,
    },
  };
};

const CharacterList = ({ data }: any) => {
  console.log(data);
  return <h1>ass</h1>;
};

export default CharacterList;
