type ListType = {
  userId: number;
  title: string;
  completed: boolean;
};

export const List = (props: ListType) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};
