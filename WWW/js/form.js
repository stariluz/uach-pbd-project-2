Array.from(document.getElementsByClassName("form-js")).forEach(($form) => {
    $form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formDataJSON = JSON.stringify(Object.fromEntries(formData.entries()));
        console.log(formDataJSON)
        fetch(event.target.action, {
            method: "POST",
            body: formDataJSON,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            if (response.status == 200) {
                return new Promise((resolve, reject) => {
                    response.text().then((responseText) => {
                        console.log(responseText)
                        resolve({
                            response: responseText,
                            form: $form
                        });
                    });
                })
            } else {
                return new Promise((resolve, reject) => {
                    response.text().then((responseText) => {
                        reject(responseText);
                    });
                })
            }
        }).then(
            OnFormNext
        ).catch(onFormError);
    });
})

onFormError = (error) => {
    console.log(error);
    const $notification = document.getElementById("notification");
    $notification.classList.add('error');
    $notification.classList.add('active');
    const $message = $notification.querySelector('#message');
    $message.innerText = error;

    setTimeout(() => {
        $notification.classList.remove('active');
        setTimeout(() => {
            $notification.classList.remove('error');
        }, 500);
    }, 5000);

}

OnFormNext = ({response, form}) => {
    const $notification = document.getElementById("notification");
    $notification.classList.add('next');
    $notification.classList.add('active');
    const $message = $notification.querySelector('#message');
    $message.innerText = response;
    setTimeout(() => {
        $notification.classList.remove('active');
        setTimeout(() => {
            $notification.classList.remove('next');
        }, 500);
    }, 5000);
    form.reset();
}