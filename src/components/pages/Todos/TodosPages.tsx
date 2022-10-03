import Container from "../../ui/Container";
import Grid from "../../ui/Grid";

const TodosPage = () => {
    return (
        <Container>
            <Grid type='container'>
                <Grid type='item' xs={12}>
                    <h1>Todos list</h1>
                </Grid>
                <Grid type='item' xs={12} sm={6} md={4}>
                    Todo 1
                </Grid>
                <Grid type='item' xs={12} sm={6} md={4}>
                    Todo 2
                </Grid>
                <Grid type='item' xs={12} sm={6} md={4}>
                    Todo 3
                </Grid>
            </Grid>
        </Container>
    )
}

export default TodosPage;
