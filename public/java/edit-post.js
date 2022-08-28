async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = document.querySelector('input[name="content"]').value.trim();

    console.log(title);
    console.log(content);

    const id = window.location.toString().split('/') [
        window.location.toString().split('/').length - 1
    ];

    //await the response from api 
    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            post_id: id,
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    //replace the dashboard content
    if (response.ok) {
        document.location.replace('/dashboard/');
    } else {
        alert (response.statusText);
    }
}

//on click activte editform handler
document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);