/* import React, { useState } from 'react';
import { Container, Grid, makeStyles, Button, TextField } from "@material-ui/core";
import post_image from './../api/post_image';
export default function insertimage(props) {
    const handleSubmit = (e) => {
        const data = {};
        data.append('link', url);
        post_image(data).then(res => {
            if (res.status === 200) {
                console.log("inserted");
            }
            else{
                console.log("error");   
        }})     
    }
    return (
        <Container className={classes.mContainer} id="insert">
            <Grid container>
                <Grid item sm={7}>
                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={5}>
                            <Grid item sm={6} xs={12}>
                                <TextField name='url' value={url} onChange={handleName} fullWidth id="standard-basic" label="Name" required />
                            </Grid>
                            <Grid item xs={12}>
                                <Button disabled={loading} fullWidth  type='submit'>SUBMIT</Button>
                            </Grid>

                        </Grid>
                    </form>
                </Grid>
            </Grid>

        </Container>
    )
} */