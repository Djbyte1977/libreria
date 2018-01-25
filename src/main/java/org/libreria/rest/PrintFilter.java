package org.libreria.rest;

import java.io.IOException;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.ext.Provider;


@Provider
public class PrintFilter implements ContainerResponseFilter, ContainerRequestFilter {

    @Override
    public void filter(ContainerRequestContext requestContext, ContainerResponseContext responseContext)
            throws IOException {


        System.out.println("Response body: " + responseContext.getEntity());
    }

    @Override
    public void filter(ContainerRequestContext requestContext) throws IOException {
        String string = java.net.URLDecoder.decode(requestContext.getEntityStream(), "UTF-8");
        System.out.println("request body: " + string);
    }


}
