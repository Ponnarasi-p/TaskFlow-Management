import {

    Paper,

    Table,

    TableBody,

    TableCell,

    TableContainer,

    TableHead,

    TableRow,

    Typography,

    Chip

} from "@mui/material";

interface Comment {

    id: number;

    comment: string;

    createdAt: string;

    user: {

        name: string;

    };

    task: {

        title: string;

    };

}

interface Props {

    data: Comment[];

}

const RecentCommentsTable = ({

    data

}: Props) => {

    return (

        <>

            <Typography

                variant="h5"

                fontWeight="bold"

                mt={5}

                mb={2}

            >

                Recent Comments

            </Typography>

            <TableContainer component={Paper}>

                <Table>

                    <TableHead>

                        <TableRow>

                            <TableCell>

                                <b>User</b>

                            </TableCell>

                            <TableCell>

                                <b>Task</b>

                            </TableCell>

                            <TableCell>

                                <b>Comment</b>

                            </TableCell>

                            <TableCell>

                                <b>Date</b>

                            </TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {

                            data.map((comment) => (

                                <TableRow key={comment.id}>

                                    <TableCell>

                                        <Chip

                                            label={comment.user.name}

                                            color="primary"

                                            size="small"

                                        />

                                    </TableCell>

                                    <TableCell>

                                        {comment.task.title}

                                    </TableCell>

                                    <TableCell>

                                        {comment.comment}

                                    </TableCell>

                                    <TableCell>

                                        {

                                            new Date(

                                                comment.createdAt

                                            ).toLocaleDateString()

                                        }

                                    </TableCell>

                                </TableRow>

                            ))

                        }

                    </TableBody>

                </Table>

            </TableContainer>

        </>

    );

};

export default RecentCommentsTable;