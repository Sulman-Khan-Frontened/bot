<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Chatbot</title>
</head>

<body>
    <div class="container" role="main" aria-label="Chatbot interface">
        <nav class="chats-container" role="navigation" aria-label="Chats">
            <h1>ChatBot - X1.3</h1>
            <hr>
            <div class="previous-chats">
                <!-- <p>This is Chat BTN
                    <button class="delete-chat">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </p>
                <p>This is Chat BTN
                    <button class="delete-chat">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </p>
                <p>This is Chat BTN
                    <button class="delete-chat">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </p> -->

            </div>
        </nav>
        <div class="chats-previewer">
            <div class="quiz-container">
                <input type="tel" name="" id="_chat" placeholder="Type Message Here....">
                <form id="_send">
                    <button class=" " id="submit" type="submit">
                        <i class="fa-solid fa-arrow-up"> </i>
                        <div class="loader"></div>
                    </button>
                </form>
            </div>
            <main class="main-container">
            </main>
        </div>
    </div>
    <script src="./js/min.js"></script>
    <script src="./js/script.js"></script>
</body>

</html>