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

import com.adobe.acs.commons.models.injectors.annotation.ChildResourceFromRequest;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.uol.cryptobike.core.models.YellowDownload;
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
    YellowDownload.class,
    ComponentExporter.class
}, resourceType = "cryptobike/components/yellow-download")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class YellowDownloadImpl
    implements YellowDownload
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String title;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String description;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image background;
    @ChildResourceFromRequest(injectionStrategy = InjectionStrategy.OPTIONAL)
    private com.adobe.cq.wcm.core.components.models.Image backgroundMobile;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String iosLabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String iosUrl;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String androidLabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String androidUrl;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("title")
    public String getTitle() {
        return title;
    }

    @Override
    @JsonProperty("description")
    public String getDescription() {
        return description;
    }

    @Override
    @JsonProperty("background")
    public com.adobe.cq.wcm.core.components.models.Image getBackground() {
        return background;
    }

    @Override
    @JsonProperty("backgroundMobile")
    public com.adobe.cq.wcm.core.components.models.Image getBackgroundMobile() {
        return backgroundMobile;
    }

    @Override
    @JsonProperty("iosLabel")
    public String getIosLabel() {
        return iosLabel;
    }

    @Override
    @JsonProperty("iosUrl")
    public String getIosUrl() {
        return iosUrl;
    }

    @Override
    @JsonProperty("androidLabel")
    public String getAndroidLabel() {
        return androidLabel;
    }

    @Override
    @JsonProperty("androidUrl")
    public String getAndroidUrl() {
        return androidUrl;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
