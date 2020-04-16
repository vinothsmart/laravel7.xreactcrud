import React from 'react';

export default function Add() {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label for="categoryName">Email address</label>
                    <input type="text" className="form-control" id="categoryName" aria-describedby="emailHelp"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}
