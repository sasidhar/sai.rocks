if (top != self) {
    top.location.replace(document.location);
    alert(
        "For security reasons, framing is not allowed; click OK to remove the frames."
    );
}
