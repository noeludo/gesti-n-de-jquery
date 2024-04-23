$(document).ready(function() {
    // Añadir una nueva tarea
    $("#addTask").click(function() {
        var taskName = $("#taskName").val().trim();
        if (!taskName) {
            $("#errorMessage").text("Por favor, introduce un nombre para la tarea.");
            return;
        }

        $("#errorMessage").text(""); // Limpiar el mensaje de error

        var taskDescription = $("#taskDescription").val();
        var taskDate = $("#taskDate").val();

        var taskItem = $("<div class='task'><input type='checkbox' class='complete-checkbox'> <h3>" + taskName + "</h3><p>" + taskDescription + "</p><p>Fecha: " + taskDate + "</p><button class='deleteTask'>Eliminar</button></div>");

        $("#taskList").append(taskItem);

        $("#taskName").val("");
        $("#taskDescription").val("");
        $("#taskDate").val("");
    });

    // Eliminar una tarea
    $(document).on("click", ".deleteTask", function() {
        $(this).closest(".task").remove();
    });
});
