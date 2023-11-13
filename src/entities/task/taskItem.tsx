import React from 'react';
import { usePostsQuery } from './api/taskApi';
import style from './taskItem.module.scss';

const TaskItem = ({ text }: { text: string }) => {
	return <div className={style.taskContainer}>{text}</div>;
};

export default TaskItem;
