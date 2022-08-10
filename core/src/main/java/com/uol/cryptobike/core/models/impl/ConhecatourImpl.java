/*
 * ***********************************************************************
 * Compass UOL CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Compass UOL.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Compass UOL and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Compass UOL
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Compass UOL.
 * ***********************************************************************
 */

package com.uol.cryptobike.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.uol.cryptobike.core.models.Conhecatour;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    Conhecatour.class,
    ComponentExporter.class
}, resourceType = "cryptobike/components/conhecatour")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class ConhecatourImpl
    implements Conhecatour
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleconhecatour;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String link;
    @SlingObject
    private Resource resource;

    @Override
    public String getTitleconhecatour() {
        return titleconhecatour;
    }

    @Override
    public String getLink() {
        return link;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}