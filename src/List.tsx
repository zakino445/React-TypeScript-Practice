export const List = (props) => {
  const { title, userId } = props;
  return <p>{`${title}(ユーザー:${userId})`}</p>;
};
