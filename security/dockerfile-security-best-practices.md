Dockerfile best practices (short):
- Use multi-stage builds to keep final images small.
- Pin base image versions.
- Avoid running as root; create non-root user.
- Minimize number of layers and remove build tools in final stage.
- Do not store secrets or credentials in the image.
- Set HEALTHCHECK if applicable.
- Use smaller base images (alpine, distroless) where possible.
